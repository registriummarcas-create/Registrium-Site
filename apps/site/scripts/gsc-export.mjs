// Exporta TODAS as páginas do Search Console (sem o limite de 1.000 linhas da interface)
// usando a API Search Analytics. Sem dependências além do Node 18+.
//
// Dois modos de autenticação:
//   A) Conta de serviço:  GSC_KEY_FILE=caminho/chave.json
//   B) OAuth (app Desktop): GSC_CLIENT_ID e GSC_CLIENT_SECRET — abre um link no navegador
//      para você autorizar com a conta dona da propriedade no Search Console.
//
// Variáveis opcionais:
//   GSC_SITE   propriedade no GSC (padrão: sc-domain:registrium.com.br;
//              se for propriedade de prefixo de URL, use https://registrium.com.br/)
//   GSC_START  data inicial AAAA-MM-DD (padrão: 90 dias atrás)
//   GSC_END    data final   AAAA-MM-DD (padrão: 3 dias atrás, pois o GSC tem atraso)
//   GSC_OUT    arquivo de saída (padrão: gsc-paginas.csv)
import { createSign } from 'node:crypto';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';

const keyFile = process.env.GSC_KEY_FILE;
const clientId = process.env.GSC_CLIENT_ID;
const clientSecret = process.env.GSC_CLIENT_SECRET;
if (!keyFile && !(clientId && clientSecret)) {
  console.error('Defina GSC_KEY_FILE (conta de serviço) ou GSC_CLIENT_ID + GSC_CLIENT_SECRET (OAuth).');
  process.exit(1);
}
const key = keyFile ? JSON.parse(readFileSync(keyFile, 'utf8')) : null;
const site = process.env.GSC_SITE || 'sc-domain:registrium.com.br';
const out = process.env.GSC_OUT || 'gsc-paginas.csv';
const iso = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => new Date(Date.now() - n * 864e5);
const startDate = process.env.GSC_START || iso(daysAgo(90));
const endDate = process.env.GSC_END || iso(daysAgo(3));

const b64 = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');

async function oauthToken() {
  const port = 8085;
  const redirectUri = `http://127.0.0.1:${port}`;
  const scope = 'https://www.googleapis.com/auth/webmasters.readonly';
  const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
    client_id: clientId, redirect_uri: redirectUri, response_type: 'code', scope, access_type: 'online'
  });
  console.log(`Abra este link no navegador e autorize o acesso:\n\n${authUrl}\n`);
  const code = await new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const params = new URL(req.url, redirectUri).searchParams;
      res.end('Autorizado. Pode fechar esta aba e voltar ao terminal.');
      server.close();
      params.get('code') ? resolve(params.get('code')) : reject(new Error(params.get('error') || 'sem código'));
    }).listen(port, '127.0.0.1');
  });
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, grant_type: 'authorization_code' })
  });
  if (!res.ok) throw new Error(`Falha ao trocar o código: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function accessToken() {
  if (!key) return oauthToken();
  const now = Math.floor(Date.now() / 1000);
  const header = b64({ alg: 'RS256', typ: 'JWT' });
  const claims = b64({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  });
  const signature = createSign('RSA-SHA256').update(`${header}.${claims}`).sign(key.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claims}.${signature}`
    })
  });
  if (!res.ok) throw new Error(`Falha ao obter token: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

const token = await accessToken();
const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
const PAGE = 25000;
const rows = [];

for (let startRow = 0; ; startRow += PAGE) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions: ['page'],
      type: 'web',
      rowLimit: PAGE,
      startRow
    })
  });
  if (!res.ok) throw new Error(`Erro da API: ${res.status} ${await res.text()}`);
  const batch = (await res.json()).rows ?? [];
  rows.push(...batch);
  console.log(`Linhas baixadas: ${rows.length}`);
  if (batch.length < PAGE) break;
}

const csv = ['pagina,cliques,impressoes,ctr,posicao']
  .concat(rows.map((r) => [r.keys[0], r.clicks, r.impressions, r.ctr.toFixed(4), r.position.toFixed(2)].join(',')))
  .join('\n');
writeFileSync(out, csv + '\n', 'utf8');
console.log(`Período ${startDate} a ${endDate} | ${rows.length} páginas salvas em ${out}`);
