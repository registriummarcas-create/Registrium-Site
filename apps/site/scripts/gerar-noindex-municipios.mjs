// Gera src/data/municipios-noindex.json: municípios que ficam fora do índice do Google
// (noindex,follow + fora do sitemap). Etapa 1 da poda: fora da PB, sem nenhuma impressão
// no período do CSV do Search Console E com população abaixo do corte.
//
// Uso: node --experimental-strip-types scripts/gerar-noindex-municipios.mjs [csv] [corte-populacao]
// Padrão: seo/gsc-baseline-2026-10-14.csv e 20000. Para reverter/ajustar, rode de novo com outro
// CSV/corte ou edite o JSON gerado.
import { readFileSync, writeFileSync } from 'node:fs';
import { municipiosBrasil } from '../src/data/municipios.generated.ts';
import { enriquecimentoPorCodigo } from '../src/data/municipios-enriquecimento.generated.ts';

const csvPath = process.argv[2] || 'seo/gsc-baseline-2026-10-14.csv';
const corte = Number(process.argv[3] || 20000);
const PROTEGIDAS = new Set(['pb']);

const comImpressao = new Set();
for (const linha of readFileSync(csvPath, 'utf8').split('\n').slice(1)) {
  const m = linha.match(/registro-de-marca\/([^/]+)\/([a-z]{2})\/,(\d+),(\d+),/);
  if (m && Number(m[4]) > 0) comImpressao.add(`${m[1]}/${m[2]}`);
}

const populacao = (c) => {
  const e = enriquecimentoPorCodigo;
  return (e.get ? e.get(c.codigoIbge) : e[c.codigoIbge])?.populacao2025 ?? 0;
};

const noindex = municipiosBrasil
  .filter((c) => !PROTEGIDAS.has(c.uf) && !comImpressao.has(`${c.slug}/${c.uf}`) && populacao(c) < corte)
  .map((c) => `${c.slug}/${c.uf}`)
  .sort();

writeFileSync(new URL('../src/data/municipios-noindex.json', import.meta.url), JSON.stringify(noindex, null, 0) + '\n');
console.log(`${noindex.length} municípios em noindex de ${municipiosBrasil.length} (corte ${corte} hab., ${comImpressao.size} com impressão).`);
