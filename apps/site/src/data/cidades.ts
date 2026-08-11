// Páginas locais: registro de marca nas principais cidades da Paraíba.
// O registro de marca é federal (vale para todo o Brasil), então cada página
// evita ser rasa trazendo contexto econômico real da cidade e da região.
// Ordem: 10 municípios mais populosos da PB (IBGE) + Esperança.

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
  /** Panorama com dados de fontes oficiais (Sebrae/PB, Empreender PB, imprensa). */
  panorama: string[];
  /** Citações das fontes usadas no panorama. */
  fontes: string[];
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
    panorama: [
      'Segundo o Sebrae/PB, João Pessoa concentra 62.584 pequenos negócios — a maior marca entre todos os municípios paraibanos, evidência do tamanho do mercado da capital. A cidade também lidera o estado como polo de tecnologia, referência entre as 418 startups ativas na Paraíba.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)', 'WSCOM Economia (jun. 2026)'],
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
    panorama: [
      'Campina Grande soma 26.243 pequenos negócios, o segundo maior número do estado, segundo o Sebrae/PB. A cidade sedia o PaqTcPB — Parque Tecnológico da Paraíba, fundado em 1984 e um dos três primeiros do Brasil — e a FETECH, feira de tecnologia criada em 1988 que chegou à 15ª edição em 2026, reunindo universidades, empresas e governo em torno da inovação.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)', 'PaqTcPB (paqtc.org.br)', 'Governo da Paraíba / Fapesq (2026)'],
    setores: ['Tecnologia e startups', 'Comércio e varejo', 'Eventos e alimentação', 'Educação e cursos', 'Indústria e serviços'],
    faq: faqComum('Campina Grande')
  },
  {
    slug: 'santa-rita',
    nome: 'Santa Rita',
    regiao: 'Região Metropolitana de João Pessoa',
    seoTitle: 'Registro de marca em Santa Rita (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Santa Rita e da Grande João Pessoa. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Santa Rita',
    heroDescription:
      'Terceira maior cidade da Paraíba e polo industrial da Grande João Pessoa: proteja a marca do seu negócio no INPI, com atendimento paraibano.',
    meta: ['Santa Rita · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Santa Rita é a terceira cidade mais populosa da Paraíba e parte da Região Metropolitana de João Pessoa, com uma base industrial e agroindustrial relevante. Para os negócios que crescem nesse ambiente, registrar a marca no INPI é o que garante exclusividade sobre o nome.',
    contexto: [
      'Integrada à Grande João Pessoa, Santa Rita combina indústria, agroindústria — com forte tradição no setor da cana-de-açúcar — e um comércio local que se beneficia da proximidade com a capital. É um município de empresas que atendem tanto o mercado metropolitano quanto o interior.',
      'Nesse contexto de competição regional, o registro no INPI protege a marca em todo o Brasil e evita que o nome de uma empresa santa-ritense seja registrado por terceiros de outra cidade ou estado.'
    ],
    panorama: [
      'Terceira cidade mais populosa da Paraíba, Santa Rita tem 6.477 pequenos negócios ativos, segundo o Sebrae/PB — reflexo de sua base industrial e da proximidade com a capital.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Indústria e agroindústria', 'Cana-de-açúcar', 'Comércio e serviços', 'Logística', 'Construção'],
    faq: faqComum('Santa Rita')
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
    panorama: [
      'Patos soma 5.793 pequenos negócios, segundo o Sebrae/PB, que mantém agência própria na cidade para atender o sertão paraibano. A região também é alcançada por ciclos do programa estadual Empreender PB, que leva crédito com juros reduzidos a dezenas de municípios do Sertão.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)', 'Governo da Paraíba — Empreender PB (2026)'],
    setores: ['Comércio e atacado', 'Serviços e saúde', 'Agronegócio e pecuária', 'Alimentação', 'Educação'],
    faq: faqComum('Patos')
  },
  {
    slug: 'bayeux',
    nome: 'Bayeux',
    regiao: 'Região Metropolitana de João Pessoa',
    seoTitle: 'Registro de marca em Bayeux (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Bayeux e da Grande João Pessoa. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Bayeux',
    heroDescription:
      'Comércio forte e conurbada com a capital: proteja a marca do seu negócio bayeuxense no INPI, com atendimento paraibano e à distância.',
    meta: ['Bayeux · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Bayeux integra a Região Metropolitana de João Pessoa e é uma das cidades mais densas da Paraíba, com um comércio de rua intenso e muitos pequenos negócios. Nesse ambiente movimentado, registrar a marca no INPI é o que garante exclusividade sobre o nome.',
    contexto: [
      'Conurbada com João Pessoa e Santa Rita, Bayeux tem uma economia apoiada no comércio, nos serviços e na indústria, aproveitando a localização no corredor da BR-230 e a proximidade com a capital. É uma cidade de empreendedores que atendem tanto o bairro quanto a região metropolitana.',
      'Com tantas marcas surgindo e circulando na Grande João Pessoa, o registro no INPI protege o nome do seu negócio em todo o país e impede que outra empresa passe a usá-lo.'
    ],
    panorama: [
      'Bayeux tem 4.441 pequenos negócios ativos, segundo o Sebrae/PB — o quinto maior número entre os municípios paraibanos, puxado pelo comércio denso e pela proximidade com João Pessoa.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Comércio e varejo', 'Serviços', 'Indústria', 'Construção', 'Alimentação'],
    faq: faqComum('Bayeux')
  },
  {
    slug: 'cabedelo',
    nome: 'Cabedelo',
    regiao: 'Litoral / Região Metropolitana',
    seoTitle: 'Registro de marca em Cabedelo (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Cabedelo, cidade portuária e turística da Grande João Pessoa. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Cabedelo',
    heroDescription:
      'Da economia do porto ao turismo das praias: proteja a marca do seu negócio cabedelense no INPI, com atendimento paraibano.',
    meta: ['Cabedelo · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Cabedelo une o principal porto da Paraíba a um litoral que vive de turismo. Essa combinação cria um comércio e uma rede de serviços movimentados o ano inteiro — e negócios movimentados precisam da marca protegida no INPI.',
    contexto: [
      'Sede do Porto de Cabedelo, a cidade tem forte vocação para logística e comércio, ao mesmo tempo em que atrai visitantes para praias como Poço e Intermares e para os passeios de barco. Turismo, gastronomia, pesca e serviços caminham juntos numa cidade que faz parte da Grande João Pessoa.',
      'Marcas ligadas a turismo e alimentação se espalham rápido nas redes e nos aplicativos de viagem. Registrar no INPI garante exclusividade nacional sobre o nome e protege o negócio contra cópias e usos indevidos.'
    ],
    panorama: [
      'Cabedelo soma 3.925 pequenos negócios, segundo o Sebrae/PB, impulsionados pela combinação de porto, pesca e turismo de praia que move a economia local.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Portuário e logística', 'Turismo e praias', 'Bares e restaurantes', 'Pesca', 'Comércio e serviços'],
    faq: faqComum('Cabedelo')
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
    panorama: [
      'Sousa tem 2.399 pequenos negócios ativos, segundo o Sebrae/PB, que mantém agência local para atender o alto sertão. A região também é contemplada por ciclos de crédito do programa estadual Empreender PB, voltado a municípios de Cajazeiras, Sousa e Vale do Piancó.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)', 'Governo da Paraíba — Empreender PB (2026)'],
    setores: ['Agronegócio', 'Comércio e varejo', 'Serviços', 'Turismo', 'Alimentação'],
    faq: faqComum('Sousa')
  },
  {
    slug: 'cajazeiras',
    nome: 'Cajazeiras',
    regiao: 'Alto Sertão da Paraíba',
    seoTitle: 'Registro de marca em Cajazeiras (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Cajazeiras e do extremo oeste paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Cajazeiras',
    heroDescription:
      'Polo de educação e comércio do extremo oeste da Paraíba: proteja a marca do seu negócio no INPI, com atendimento paraibano.',
    meta: ['Cajazeiras · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Cajazeiras é o principal polo do extremo oeste paraibano, na divisa com o Ceará, com forte tradição em educação e um comércio que atende toda a região. Para os negócios que crescem nesse centro regional, registrar a marca no INPI é o que garante o nome de forma definitiva.',
    contexto: [
      'Conhecida como "a cidade que ensinou a Paraíba" pela sua vocação educacional, Cajazeiras reúne instituições de ensino, serviços de saúde e um comércio regional que serve dezenas de municípios do alto sertão e do vizinho estado do Ceará.',
      'Esse alcance regional torna a marca ainda mais valiosa — e mais exposta a cópias. O registro no INPI protege o nome em todo o país e evita que a reputação construída na região seja explorada por terceiros.'
    ],
    panorama: [
      'Cajazeiras soma 2.505 pequenos negócios, segundo o Sebrae/PB, que mantém agência própria na cidade. A região integra os ciclos de crédito do programa estadual Empreender PB, voltados a municípios de Cajazeiras, Sousa e Vale do Piancó.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)', 'Governo da Paraíba — Empreender PB (2026)'],
    setores: ['Educação', 'Comércio regional', 'Serviços e saúde', 'Agropecuária', 'Alimentação'],
    faq: faqComum('Cajazeiras')
  },
  {
    slug: 'guarabira',
    nome: 'Guarabira',
    regiao: 'Brejo paraibano',
    seoTitle: 'Registro de marca em Guarabira (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Guarabira e do Brejo paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Guarabira',
    heroDescription:
      'Principal polo comercial do Brejo paraibano: proteja a marca do seu negócio no INPI, com atendimento paraibano e à distância.',
    meta: ['Guarabira · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Guarabira é o centro comercial e de serviços do Brejo paraibano, referência para dezenas de municípios do entorno. Para os negócios que atendem essa região, registrar a marca no INPI é o que assegura o nome à medida que a empresa se torna conhecida.',
    contexto: [
      'Polo do Brejo, Guarabira concentra comércio, educação, saúde e serviços que atraem consumidores de toda a região, além de ser conhecida pelo turismo religioso. É uma cidade de marcas locais consolidadas que atendem muito além dos seus limites.',
      'Quanto maior o alcance regional de uma marca, maior o risco de que alguém a registre primeiro. O registro no INPI garante exclusividade nacional sobre o nome e protege o negócio guarabirense contra uso indevido por terceiros.'
    ],
    panorama: [
      'Guarabira tem 2.693 pequenos negócios ativos, segundo o Sebrae/PB, que mantém agência local para atender o Brejo paraibano — o maior número entre os municípios da região.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Comércio regional', 'Serviços', 'Educação', 'Saúde', 'Agroindústria'],
    faq: faqComum('Guarabira')
  },
  {
    slug: 'sape',
    nome: 'Sapé',
    regiao: 'Zona da Mata paraibana',
    seoTitle: 'Registro de marca em Sapé (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Sapé e da Zona da Mata paraibana. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Sapé',
    heroDescription:
      'No coração agrícola da Zona da Mata: proteja a marca do seu negócio sapeense no INPI, com atendimento paraibano e à distância.',
    meta: ['Sapé · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Sapé é um dos principais municípios da Zona da Mata paraibana, com uma economia de base agrícola e um comércio que atende a região. Para os negócios locais, registrar a marca no INPI é o passo que protege o nome e abre espaço para crescer.',
    contexto: [
      'Na Zona da Mata, Sapé tem forte tradição no agronegócio — da cana-de-açúcar à produção de abacaxi, característica da região — além de um comércio e uma rede de serviços que atendem o município e o entorno.',
      'Marcas de alimentos, agro e comércio ganham muito valor quando protegidas. O registro no INPI garante exclusividade nacional sobre o nome e evita que ele seja registrado por concorrentes de outras regiões.'
    ],
    panorama: [
      'Sapé soma 1.527 pequenos negócios, segundo o Sebrae/PB, concentrados sobretudo em comércio e serviços que atendem a produção agrícola da Zona da Mata.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Agronegócio (cana e abacaxi)', 'Comércio', 'Serviços', 'Agroindústria', 'Alimentação'],
    faq: faqComum('Sapé')
  },
  {
    slug: 'esperanca',
    nome: 'Esperança',
    regiao: 'Agreste paraibano',
    seoTitle: 'Registro de marca em Esperança (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Esperança e do agreste paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Esperança',
    heroDescription:
      'No agreste de clima ameno, perto de Campina Grande: proteja a marca do seu negócio esperancense no INPI, com atendimento paraibano.',
    meta: ['Esperança · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Esperança se destaca no agreste paraibano pelo clima ameno de altitude e por uma economia que combina agricultura e comércio. Para os negócios que crescem na cidade e na região, registrar a marca no INPI é o que garante exclusividade sobre o nome.',
    contexto: [
      'Localizada no agreste, próxima a Campina Grande, Esperança é conhecida pelo clima serrano agradável e por uma agricultura ativa, com destaque para a horticultura, além de um comércio regional que movimenta a cidade e atrai visitantes em feiras e eventos.',
      'Nesse ambiente empreendedor, o registro no INPI protege a marca em todo o Brasil e evita que o nome de um negócio esperancense seja usado por terceiros de outras cidades ou estados.'
    ],
    panorama: [
      'Esperança tem 1.575 pequenos negócios ativos, segundo o Sebrae/PB — um número relevante para o porte do município, sustentado pela agricultura e pelo comércio local.'
    ],
    fontes: ['Sebrae/PB — Agência Sebrae de Notícias (jul. 2026)'],
    setores: ['Agricultura e horticultura', 'Comércio e varejo', 'Serviços', 'Alimentação', 'Eventos e turismo'],
    faq: faqComum('Esperança')
  },
  {
    slug: 'montadas',
    nome: 'Montadas',
    regiao: 'Agreste paraibano',
    seoTitle: 'Registro de marca em Montadas (PB) | Registrium',
    seoDescription:
      'Registro de marca no INPI para empresas de Montadas, no agreste paraibano. Empresa paraibana, atendimento online. Fale com a Registrium.',
    heroTitle: 'Registro de marca em Montadas',
    heroDescription:
      'No agreste paraibano, entre Esperança e Campina Grande: proteja a marca do seu negócio no INPI, com atendimento paraibano e à distância.',
    meta: ['Montadas · PB', 'Atendimento online', 'Empresa paraibana'],
    lede:
      'Montadas é um pequeno município do agreste paraibano, na região de Esperança e Campina Grande. Mesmo num mercado local menor, registrar a marca no INPI garante a mesma exclusividade nacional que protege negócios de qualquer tamanho.',
    contexto: [
      'A economia de Montadas gira em torno da administração pública, do comércio e dos serviços locais, além da agropecuária, que ainda tem peso relevante no município. É uma cidade pequena, mas com negócios reais que precisam da mesma proteção legal de empresas maiores.',
      'É comum achar que registro de marca é coisa para negócio grande — mas é o contrário: em municípios pequenos, um nome de sucesso viaja rápido pela região e fica mais exposto a cópias. O registro no INPI resolve isso de uma vez, com validade em todo o Brasil, não só em Montadas.'
    ],
    panorama: [
      'Segundo o IBGE, Montadas tem cerca de 6.144 habitantes (estimativa 2025) e um PIB de aproximadamente R$ 55,2 milhões, com a administração pública respondendo por 63,6% do valor adicionado, seguida por serviços (19,1%) e agropecuária (14,3%).',
      'No cenário estadual, a Paraíba soma 305.866 pequenos negócios ativos — 95,7% de todas as empresas do estado, segundo o Sebrae/PB — prova de que o pequeno negócio, mesmo em municípios do porte de Montadas, é a espinha dorsal da economia paraibana.'
    ],
    fontes: ['IBGE — Cidades@ (2022/2025)', 'Sebrae/PB — Agência Sebrae de Notícias (2026)'],
    setores: ['Administração pública', 'Comércio e serviços', 'Agropecuária', 'Alimentação'],
    faq: faqComum('Montadas')
  }
];

export function getCidade(slug: string): Cidade | undefined {
  return cidades.find((c) => c.slug === slug);
}
