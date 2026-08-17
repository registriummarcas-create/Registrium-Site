// Gera apps/site/src/data/cnae.generated.ts a partir da API oficial de CNAE do IBGE.
// Fonte: https://servicodados.ibge.gov.br/api/docs/CNAE?versao=2
// Uso: node scripts/generate-cnae.mjs
//
// Descarta as seções que não fazem sentido para registro de marca de negócio privado:
// O (Administração pública), T (Serviços domésticos), U (Organismos internacionais).

import { writeFile } from 'node:fs/promises';

const API_URL = 'https://servicodados.ibge.gov.br/api/v2/cnae/subclasses';
const SECOES_EXCLUIDAS = new Set(['O', 'T', 'U']);
const OUTPUT_PATH = new URL('../apps/site/src/data/cnae.generated.ts', import.meta.url);

const ACRONIMOS = new Set([
  'TI', 'GLP', 'GNV', 'GPS', 'LTDA', 'MEI', 'EPP', 'ME', 'SPA', 'TV', 'DVD', 'CD',
  'PET', 'PVC', 'LED', 'ONG', 'CNPJ', 'CPF', 'EAD', 'CD/DVD', 'GLP/GNV', 'AM/FM', 'PDF'
]);

function paraSentenca(textoCaixaAlta) {
  const minusculo = textoCaixaAlta.toLocaleLowerCase('pt-BR');
  const palavras = minusculo.split(' ').map((palavra) => {
    const semPontuacao = palavra.replace(/[.,;:()"'-]/g, '').toUpperCase();
    return ACRONIMOS.has(semPontuacao) ? palavra.toUpperCase() : palavra;
  });
  let resultado = palavras.join(' ');
  resultado = resultado.replace(/(^\s*\p{L}|[.!?]\s+\p{L})/gu, (m) => m.toLocaleUpperCase('pt-BR'));
  return resultado;
}

function slugify(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatarCodigo(id) {
  // id: 7 dígitos -> NNNN-N/NN (padrão CNAE-Fiscal)
  return `${id.slice(0, 4)}-${id.slice(4, 5)}/${id.slice(5, 7)}`;
}

function extrairItens(observacoes, prefixo) {
  const bloco = observacoes?.find((o) => o.startsWith(prefixo));
  if (!bloco) return [];
  const corpo = bloco.slice(bloco.indexOf('-') + 1);
  return corpo
    .split(/\r?\n-\s*/)
    .map((item) => item.replace(/\r?\n/g, ' ').trim())
    .filter(Boolean)
    .map((item) => paraSentenca(item))
    .slice(0, 4);
}

console.log('Buscando subclasses da CNAE 2.3 em', API_URL, '...');
const res = await fetch(API_URL);
if (!res.ok) throw new Error(`Falha ao buscar CNAE: HTTP ${res.status}`);
const bruto = await res.json();
console.log('Total de subclasses recebidas:', bruto.length);

const filtradas = bruto.filter((d) => !SECOES_EXCLUIDAS.has(d.classe.grupo.divisao.secao.id));
console.log('Após excluir seções O/T/U:', filtradas.length);

const subclasses = filtradas
  .map((d) => {
    const { classe } = d;
    const { grupo } = classe;
    const { divisao } = grupo;
    const { secao } = divisao;
    const descricao = paraSentenca(d.descricao);
    const slugBase = slugify(descricao);
    return {
      id: d.id,
      codigo: formatarCodigo(d.id),
      descricao,
      descricaoOficial: d.descricao,
      secaoId: secao.id,
      secaoDescricao: paraSentenca(secao.descricao),
      divisaoId: divisao.id,
      divisaoDescricao: paraSentenca(divisao.descricao),
      grupoId: grupo.id,
      classeId: classe.id,
      slug: `${slugBase}-${d.id}`,
      sinonimos: (d.atividades ?? [])
        .filter((a) => a.toUpperCase() !== d.descricao.toUpperCase())
        .map((a) => paraSentenca(a))
        .slice(0, 5),
      compreende: extrairItens(d.observacoes, 'Esta subclasse compreende'),
      naoCompreende: extrairItens(d.observacoes, 'Esta subclasse NÃO compreende')
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const slugs = new Set(subclasses.map((s) => s.slug));
if (slugs.size !== subclasses.length) {
  throw new Error(`Slugs duplicados detectados: ${subclasses.length - slugs.size}`);
}

const linhas = subclasses.map((s) => JSON.stringify(s));

const conteudo = `// Gerado por scripts/generate-cnae.mjs a partir da API de CNAE do IBGE (CNAE 2.3).
// Fonte: https://servicodados.ibge.gov.br/api/v2/cnae/subclasses
// Exclui as seções O (Administração pública), T (Serviços domésticos) e
// U (Organismos internacionais), que não se aplicam a registro de marca de negócio privado.
// Gerado em: ${new Date().toISOString().slice(0, 10)}

export interface CnaeSubclasse {
  id: string;
  codigo: string;
  descricao: string;
  descricaoOficial: string;
  secaoId: string;
  secaoDescricao: string;
  divisaoId: string;
  divisaoDescricao: string;
  grupoId: string;
  classeId: string;
  slug: string;
  sinonimos: string[];
  compreende: string[];
  naoCompreende: string[];
}

export const cnaeSubclasses: CnaeSubclasse[] = [
${linhas.join(',\n')}
];
`;

await writeFile(OUTPUT_PATH, conteudo, 'utf8');
console.log('Escrito em', OUTPUT_PATH.pathname, '—', subclasses.length, 'subclasses.');
