// Páginas locais: registro de marca nas principais cidades da Paraíba.
// O registro de marca é federal (vale para todo o Brasil), então cada página
// evita ser rasa trazendo contexto econômico real da cidade e da região.

export interface CidadeFaq {
  q: string;
  a: string;
}

export interface Cidade {
  slug: string;
  nome: string;
  /** Como a cidade é conhecida / região. */
  regiao: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  meta: string[];
  lede: string;
  /** Contexto econômico local (parágrafos). */
  contexto: string[];
  /** Setores fortes da economia local. */
  setores: string[];
  faq: CidadeFaq[];
}

const faqComum = (nome: string): CidadeFaq[] => [
  {
    q: `Preciso ir até um escritório para registrar minha marca em ${nome}?`,
    a: `Não. Todo o processo é feito online, com atendimento pelo WhatsApp e acompanhamento à distância. Você registra a marca da sua empresa de ${nome} sem sair do lugar, com o mesmo acompanhamento diário no INPI.`
  },
  {
    q: 'O registro vale só na Paraíba ou no Brasil todo?',
    a: 'O registro de marca é federal: uma vez concedido pelo INPI, ele vale em todo o território nacional. Isso protege sua marca contra uso por empresas de qualquer estado, não só da Paraíba.'
  },
  {
    q: 'A Registrium é uma empresa da Paraíba?',
    a: 'Sim. Somos uma empresa paraibana credenciada no INPI, cuidando de marcas brasileiras desde 2021, com atendimento próximo e em português claro — sem juridiquês.'
  }
];

export const cidades: Cidade[] = [
  {
    slug: 'joao-pessoa',
    nome: 'João Pessoa',
    regiao: 'Capital da Paraíba',
    seoTitle: 'Registro de marca em João Pessoa (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de João Pessoa. Empresa paraibana, atendimento online, pesquisa de viabilidade e acompanhamento diário. Fale com a Registrium.',
    heroTitle: 'Registro de marca em João Pessoa',
    heroDescription:
      'Empresa paraibana ajudando negócios da capital a proteger a marca no INPI — com atendimento próximo, em português claro e acompanhamento diário.',
    meta: ['João Pessoa · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'João Pessoa concentra boa parte dos novos negócios da Paraíba — do turismo do litoral às startups e ao comércio que cresce a cada ano. Nesse ambiente competitivo, registrar a marca no INPI é o que garante que o nome construído com esforço não seja usado por outra empresa.',
    contexto: [
      'Como capital, João Pessoa reúne uma economia diversa: turismo e hotelaria na orla, um polo crescente de tecnologia e serviços, e um comércio forte espalhado por bairros como Manaíra, Tambaú e o Centro. É também uma cidade de muitos MEIs e pequenas empresas que nascem com identidade de marca desde o primeiro dia.',
      'Esse dinamismo tem um efeito colateral: nomes bons se repetem, e marcas parecidas surgem rápido no Instagram e no Google. Quem registra primeiro no INPI garante a exclusividade — inclusive contra franquias de fora que queiram entrar no mercado pessoense.'
    ],
    setores: ['Turismo e hotelaria', 'Bares e restaurantes', 'Tecnologia e startups', 'Comércio e varejo', 'Serviços e saúde'],
    faq: faqComum('João Pessoa')
  },
  {
    slug: 'campina-grande',
    nome: 'Campina Grande',
    regiao: 'Rainha da Borborema',
    seoTitle: 'Registro de marca em Campina Grande (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Campina Grande. Empresa paraibana, atendimento online e acompanhamento diário no INPI. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Campina Grande',
    heroDescription:
      'Do polo tecnológico ao comércio da Rainha da Borborema: proteja a marca do seu negócio campinense no INPI, com atendimento paraibano.',
    meta: ['Campina Grande · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Campina Grande é um dos polos de inovação do Nordeste, com universidades, empresas de tecnologia e um comércio tradicionalmente forte. Esse perfil empreendedor faz do registro de marca um passo natural para quem quer crescer sem correr o risco de perder o nome.',
    contexto: [
      'Conhecida como polo tecnológico e universitário, Campina Grande abriga um ecossistema de startups e empresas de base tecnológica que nascem já pensando em escala — e escala exige marca protegida. Ao mesmo tempo, o comércio da cidade e os eventos, como o maior São João do mundo, movimentam marcas locais de alimentação, moda e serviços o ano inteiro.',
      'Nesse cenário, registrar a marca no INPI garante exclusividade nacional sobre o nome, seja para uma startup que vai captar investimento, seja para um negócio local que quer expandir para outras cidades.'
    ],
    setores: ['Tecnologia e startups', 'Comércio e varejo', 'Eventos e alimentação', 'Educação e cursos', 'Indústria e serviços'],
    faq: faqComum('Campina Grande')
  },
  {
    slug: 'patos',
    nome: 'Patos',
    regiao: 'Sertão da Paraíba',
    seoTitle: 'Registro de marca em Patos (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Patos e região do sertão paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Patos',
    heroDescription:
      'Principal polo do sertão paraibano: proteja a marca do seu comércio ou serviço no INPI, com atendimento próximo e 100% online.',
    meta: ['Patos · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Patos é o principal centro comercial do sertão da Paraíba, referência para dezenas de municípios da região. Para os negócios que atendem essa área de influência, registrar a marca no INPI é o que assegura o nome à medida que a empresa cresce e se torna conhecida.',
    contexto: [
      'Polo comercial e de serviços do sertão, Patos concentra lojas, atacados, clínicas e prestadores que atendem toda a região. Muitas dessas marcas já são conhecidas localmente há anos — mas conhecimento local não é o mesmo que proteção jurídica.',
      'Sem registro no INPI, uma marca patoense conhecida pode ser registrada por terceiros de qualquer lugar do país, obrigando o negócio original a mudar de nome. O registro garante a exclusividade nacional e transforma a reputação construída na região em um ativo protegido.'
    ],
    setores: ['Comércio e atacado', 'Serviços e saúde', 'Agronegócio e pecuária', 'Alimentação', 'Educação'],
    faq: faqComum('Patos')
  },
  {
    slug: 'sousa',
    nome: 'Sousa',
    regiao: 'Alto Sertão da Paraíba',
    seoTitle: 'Registro de marca em Sousa (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Sousa e do alto sertão paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Sousa',
    heroDescription:
      'No alto sertão paraibano, do agronegócio ao comércio: proteja a marca do seu negócio no INPI, com atendimento paraibano e à distância.',
    meta: ['Sousa · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Sousa é um dos principais centros do alto sertão da Paraíba, com uma economia que combina agronegócio, comércio e serviços. Para as empresas da região, registrar a marca no INPI é o passo que protege o nome e abre caminho para crescer com segurança.',
    contexto: [
      'Referência no alto sertão, Sousa tem no agronegócio — impulsionado pelo perímetro irrigado — e no comércio regional dois de seus motores econômicos, além de um turismo ligado ao Vale dos Dinossauros. São negócios com identidade própria, que ganham valor quando a marca é protegida.',
      'O registro no INPI garante que o nome de uma empresa sousense valha em todo o Brasil, protegendo-o contra uso por terceiros e facilitando parcerias, expansão e a entrada em novos mercados.'
    ],
    setores: ['Agronegócio', 'Comércio e varejo', 'Serviços', 'Turismo', 'Alimentação'],
    faq: faqComum('Sousa')
  }
];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((c) => c.slug === slug);
}
