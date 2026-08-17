// Páginas de atividade econômica: registro de marca por CNAE + classe de Nice.
// Uma página por subclasse da CNAE 2.3 (ver cnae.generated.ts), com a classe
// de Nice sugerida pelo motor em nice-mapping.ts. Conteúdo gerado só a partir
// de fatos reais (descrição oficial da CNAE, sinônimos, o que a subclasse
// compreende/não compreende) — sem estatística inventada por atividade.

import { cnaeSubclasses, type CnaeSubclasse } from './cnae.generated';
import { inferirClassesNice, type NiceClasse } from './nice-mapping';

export interface AtividadeFaq {
  q: string;
  a: string;
}

export interface Atividade {
  slug: string;
  codigo: string;
  nome: string;
  nomeMinusculo: string;
  secaoId: string;
  secaoDescricao: string;
  divisaoId: string;
  divisaoDescricao: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  meta: string[];
  lede: string;
  contexto: string[];
  sinonimos: string[];
  compreende: string[];
  naoCompreende: string[];
  classePrimaria: NiceClasse;
  classesSecundarias: NiceClasse[];
  riscos: string[];
  faq: AtividadeFaq[];
}

function primeiraMinuscula(texto: string): string {
  return texto.length ? texto.charAt(0).toLocaleLowerCase('pt-BR') + texto.slice(1) : texto;
}

function riscosComuns(nome: string): string[] {
  return [
    'Achar que o CNAE ativo no CNPJ já protege o nome da empresa: são cadastros diferentes. O CNAE classifica a atividade perante a Receita Federal; só o registro no INPI garante exclusividade sobre a marca em todo o Brasil.',
    'Registrar só na classe sugerida sem confirmar: a Classificação de Nice tem nuances por produto ou serviço específico, e uma mesma atividade pode exigir mais de uma classe dependendo do que você realmente vende.',
    `Usar um nome descritivo demais para "${nome}" (repetir o nome do setor ou da atividade), o que reduz a distintividade e a chance de deferimento pelo INPI.`
  ];
}

function faqComum(nome: string, nomeMinusculo: string, codigo: string): AtividadeFaq[] {
  return [
    {
      q: `O CNAE de "${nome}" já me dá direito sobre o nome da minha empresa?`,
      a: 'Não. O CNAE identifica a atividade econômica perante a Receita Federal; ele não protege o nome comercial. Só o registro de marca no INPI garante exclusividade sobre o nome em todo o território nacional.'
    },
    {
      q: 'Por que a classe de Nice é diferente do código CNAE?',
      a: `O CNAE (código ${codigo}) e a Classificação de Nice servem a propósitos diferentes: um organiza a economia para fins fiscais e estatísticos: outro organiza produtos e serviços para fins de registro de marca no INPI. Por isso os números não coincidem, e uma atividade pode precisar de mais de uma classe de Nice.`
    },
    {
      q: 'A classe sugerida nesta página é a definitiva para o meu caso?',
      a: `É um ponto de partida, não uma promessa. A classe certa para "${nomeMinusculo}" depende dos detalhes do seu produto ou serviço específico — confirmamos isso na pesquisa de viabilidade antes de protocolar o pedido no INPI.`
    }
  ];
}

export function atividadeGenerica(subclasse: CnaeSubclasse): Atividade {
  const { primaria, secundarias } = inferirClassesNice(subclasse);
  const nome = subclasse.descricao;
  const nomeMinusculo = primeiraMinuscula(nome);

  return {
    slug: subclasse.slug,
    codigo: subclasse.codigo,
    nome,
    nomeMinusculo,
    secaoId: subclasse.secaoId,
    secaoDescricao: subclasse.secaoDescricao,
    divisaoId: subclasse.divisaoId,
    divisaoDescricao: subclasse.divisaoDescricao,
    seoTitle: `Registro de marca para ${nomeMinusculo} | Registrium`,
    seoDescription: `Registro de marca no INPI para empresas de "${nome}" (CNAE ${subclasse.codigo}). Classe de Nice sugerida, o que a atividade abrange e como funciona o registro pela Registrium.`,
    heroTitle: `Registro de marca para ${nomeMinusculo}`,
    heroDescription: `Descubra a classe do INPI mais indicada para "${nomeMinusculo}" e proteja o nome do seu negócio, com atendimento 100% online.`,
    meta: [`CNAE ${subclasse.codigo}`, `Classe ${primaria.code} sugerida`, 'Atendimento online'],
    lede: `"${nome}" é uma atividade da Classificação Nacional de Atividades Econômicas (CNAE), dentro de "${subclasse.divisaoDescricao}" (seção ${subclasse.secaoDescricao.toLocaleLowerCase('pt-BR')}). Para registrar a marca de um negócio nessa atividade, o INPI usa um sistema diferente do CNAE — a Classificação de Nice —, que organiza produtos e serviços em 45 classes.`,
    contexto: [
      `A classe ${primaria.code} (${primaria.label.toLocaleLowerCase('pt-BR')}) costuma ser o ponto de partida para negócios de "${nomeMinusculo}". Ela não substitui a pesquisa de viabilidade: o objetivo aqui é situar rapidamente onde a sua atividade se encaixa antes de falar com a Registrium.`,
      'Ter o CNAE certo no CNPJ é obrigatório para emitir nota fiscal e operar de forma regular, mas não tem relação jurídica com o registro de marca. São dois cadastros independentes, cada um com sua própria classificação.'
    ],
    sinonimos: subclasse.sinonimos,
    compreende: subclasse.compreende,
    naoCompreende: subclasse.naoCompreende,
    classePrimaria: primaria,
    classesSecundarias: secundarias,
    riscos: riscosComuns(nomeMinusculo),
    faq: faqComum(nome, nomeMinusculo, subclasse.codigo)
  };
}

export const atividades: Atividade[] = cnaeSubclasses.map(atividadeGenerica);

export function getAtividade(slug: string): Atividade | undefined {
  return atividades.find((a) => a.slug === slug);
}

export function getAtividadesPorDivisao(divisaoId: string): Atividade[] {
  return atividades.filter((a) => a.divisaoId === divisaoId);
}
