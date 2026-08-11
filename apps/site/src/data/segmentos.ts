// Páginas de segmento: registro de marca por ramo de atividade.
// Cada entrada tem conteúdo próprio (classes de Nice aplicáveis, panorama do setor
// com dados de fontes oficiais, riscos e FAQ) para evitar páginas rasas/duplicadas.

export interface ClasseNice {
  code: string;
  label: string;
  note: string;
}

export interface SegmentoFaq {
  q: string;
  a: string;
}

export interface Segmento {
  slug: string;
  /** Nome curto para listas e navegação. */
  nome: string;
  /** Ramo por extenso usado em títulos ("registro de marca para {alvo}"). */
  alvo: string;
  pill: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  meta: string[];
  /** Parágrafo de abertura. */
  lede: string;
  /** Corpo introdutório (parágrafos adicionais). */
  intro: string[];
  /** Panorama do setor com dados de fontes oficiais (Sebrae, INPI, imprensa especializada). */
  panorama: string[];
  /** Citações das fontes usadas no panorama. */
  fontes: string[];
  classes: ClasseNice[];
  /** Riscos e cuidados típicos do setor. */
  riscos: string[];
  faq: SegmentoFaq[];
}

export const segmentos: Segmento[] = [
  {
    slug: 'restaurantes',
    nome: 'Restaurantes e alimentação',
    alvo: 'restaurantes e alimentação',
    pill: 'Alimentação',
    seoTitle: 'Registro de marca para restaurantes e alimentação | Registrium',
    seoDescription:
      'Como registrar a marca do seu restaurante, bar, lanchonete, cafeteria ou delivery no INPI. Quais classes proteger, panorama do setor na Paraíba e o passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para restaurantes e alimentação',
    heroDescription:
      'Bar, lanchonete, cafeteria, food truck ou delivery: proteja o nome do seu negócio antes que outro registre igual na sua região.',
    meta: ['Classe 43 e afins', 'Food service', 'Atualizado em 2026'],
    lede:
      'No ramo de alimentação, o nome e a identidade visual são o principal patrimônio: é por eles que o cliente reconhece, indica e volta. Registrar a marca no INPI garante o direito de uso exclusivo em todo o Brasil e impede que um concorrente abra uma casa com o mesmo nome.',
    intro: [
      'A concorrência local é intensa e as marcas se espalham rápido pelo iFood, Instagram e Google Maps. Sem registro, você corre o risco de investir anos em reputação e ser obrigado a trocar de nome porque alguém registrou primeiro — inclusive uma franquia de outra cidade.',
      'O registro também é pré-requisito prático para franquear, licenciar receitas, vender online e fechar parcerias sem perder o controle do nome.'
    ],
    panorama: [
      'Segundo o Sebrae, a Paraíba tem 41.370 empresas ativas no setor de alimentação, das quais 98,1% são pequenos negócios. Lanchonetes, casas de chá e sucos lideram, com 5.368 estabelecimentos, seguidas por restaurantes (4.908) e negócios de comida preparada para entrega e viagem (3.670).',
      'O microempreendedor individual (MEI) é a forma predominante no setor: 69,9% dos negócios de alimentação da Paraíba estão nessa categoria — um universo de empresas pequenas, para quem a marca costuma ser o único diferencial competitivo diante de tantos concorrentes parecidos.'
    ],
    fontes: ['Sebrae/PB — DataSebrae, dados do setor de alimentação (2026)'],
    classes: [
      { code: '43', label: 'Serviços de alimentação', note: 'A classe principal do setor: restaurantes, bares, lanchonetes, cafeterias, delivery e food trucks (fornecimento de comida e bebida).' },
      { code: '30', label: 'Pães, massas, doces e café', note: 'Para quem produz e vende os próprios produtos: padarias, confeitarias, cafés torrados, molhos e temperos embalados.' },
      { code: '29', label: 'Alimentos processados', note: 'Carnes, queijos, congelados, conservas e outros alimentos preparados vendidos com a sua marca.' },
      { code: '32', label: 'Bebidas não alcoólicas', note: 'Sucos, refrigerantes artesanais, águas e cervejas sem álcool com marca própria.' },
      { code: '33', label: 'Bebidas alcoólicas', note: 'Cervejarias artesanais, cachaças, drinks engarrafados e rótulos próprios (exceto cervejas, que vão na 32).' }
    ],
    riscos: [
      'Registrar apenas o serviço (classe 43) e deixar de proteger os produtos vendidos com a marca — um erro comum de padarias e cervejarias que passam a vender embalados.',
      'Usar nomes descritivos demais ("Restaurante Caseiro", "Pizzaria da Praça"), que o INPI costuma indeferir por falta de distintividade.',
      'Copiar sem querer o nome de uma franquia nacional já registrada — a pesquisa de viabilidade antes de abrir evita prejuízo com fachada, cardápio e redes sociais.'
    ],
    faq: [
      { q: 'Preciso registrar em qual classe se sou um delivery?', a: 'A classe 43 cobre o serviço de fornecimento de comida e bebida, o que inclui delivery e food trucks. Se você também vende produtos embalados com sua marca (molhos, doces, congelados), vale proteger também as classes de produto correspondentes.' },
      { q: 'Já uso o nome há anos, ainda preciso registrar?', a: 'Sim. No Brasil, o direito sobre a marca é de quem registra primeiro no INPI, não de quem usou antes (salvo exceções limitadas). Usar há anos sem registro não impede que outro registre e passe a exigir que você mude de nome.' },
      { q: 'O nome fantasia na Junta Comercial já protege minha marca?', a: 'Não. Nome empresarial e marca são coisas diferentes. O registro na Junta Comercial vale no âmbito estadual e não impede que a mesma expressão seja registrada como marca por terceiros no INPI, com validade nacional.' }
    ]
  },
  {
    slug: 'clinicas-e-saude',
    nome: 'Clínicas e saúde',
    alvo: 'clínicas e área da saúde',
    pill: 'Saúde',
    seoTitle: 'Registro de marca para clínicas e área da saúde | Registrium',
    seoDescription:
      'Registro de marca no INPI para clínicas, consultórios, odontologia, estética e profissionais da saúde. Classes aplicáveis, panorama do setor e passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para clínicas e saúde',
    heroDescription:
      'Consultórios, clínicas odontológicas, laboratórios e profissionais da saúde: proteja o nome que carrega a confiança dos seus pacientes.',
    meta: ['Classe 44 e afins', 'Saúde', 'Atualizado em 2026'],
    lede:
      'Na saúde, a marca é reputação. Pacientes escolhem e indicam pelo nome da clínica ou do profissional, e essa confiança leva anos para ser construída. O registro no INPI protege esse nome contra uso por terceiros e valoriza o negócio.',
    intro: [
      'Clínicas em expansão, com novas unidades ou modelo de franquia, precisam do registro para crescer sem perder a exclusividade do nome. O mesmo vale para quem constrói autoridade nas redes com um nome pessoal ou de método próprio.',
      'Atenção: nomes de clínicas frequentemente esbarram em marcas anteriores parecidas na mesma classe. A pesquisa de viabilidade prévia é ainda mais importante nesse setor.'
    ],
    panorama: [
      'A Paraíba soma 13.014 pequenos negócios no segmento de saúde, segundo levantamento do Sebrae/PB com base em dados da Receita Federal. Mais de 80% são microempresas (10.817 ativas), além de 1.190 empresas de pequeno porte e 1.007 MEIs.',
      'O Sebrae mantém o projeto Impulsiona Saúde, voltado à qualificação da gestão de clínicas, consultórios e laboratórios — reflexo de um setor que cresce em número de negócios, mas ainda profissionaliza etapas básicas como a proteção formal da marca.'
    ],
    fontes: ['Sebrae/PB, via jornal A União (2026)'],
    classes: [
      { code: '44', label: 'Serviços médicos e de saúde', note: 'A classe central: serviços médicos, odontológicos, veterinários, fisioterapia, psicologia, estética e cuidados de higiene e beleza.' },
      { code: '5', label: 'Produtos farmacêuticos', note: 'Suplementos, produtos dermatológicos, fórmulas e itens farmacêuticos vendidos com a marca da clínica.' },
      { code: '10', label: 'Aparelhos médicos', note: 'Equipamentos, órteses, próteses e instrumentos médicos ou odontológicos de marca própria.' },
      { code: '41', label: 'Cursos e treinamentos', note: 'Para quem ministra cursos, workshops e formações para outros profissionais da saúde.' }
    ],
    riscos: [
      'Escolher nomes genéricos com termos como "odonto", "vida", "saúde" ou "clínica", que têm baixa distintividade e alto índice de colidência com marcas já registradas.',
      'Registrar só a clínica e esquecer o método, curso ou linha de produtos próprios, que ficam desprotegidos.',
      'Deixar para registrar depois de já ter placa, uniformes e redes sociais — se o pedido for indeferido, todo o material precisa ser refeito.'
    ],
    faq: [
      { q: 'Posso registrar meu nome próprio como marca da clínica?', a: 'Sim, é comum profissionais da saúde registrarem o próprio nome como marca. É preciso avaliar a distintividade e, em alguns casos, apresentar autorização — a pesquisa de viabilidade indica o melhor caminho.' },
      { q: 'Tenho CRM/CRO, isso já protege minha marca?', a: 'Não. O registro no conselho profissional autoriza o exercício da profissão, mas não dá exclusividade sobre o nome comercial. Só o registro no INPI protege a marca contra uso por terceiros.' },
      { q: 'Cada unidade da clínica precisa de um registro?', a: 'Não. Um único registro de marca vale em todo o território nacional, para todas as unidades sob o mesmo nome, dentro das classes protegidas.' }
    ]
  },
  {
    slug: 'moda-e-vestuario',
    nome: 'Moda e vestuário',
    alvo: 'moda, roupas e calçados',
    pill: 'Moda',
    seoTitle: 'Registro de marca para roupas, moda e vestuário | Registrium',
    seoDescription:
      'Registro de marca no INPI para grifes, lojas de roupa, calçados e acessórios. Classe 25, comércio (35), panorama do setor e o que proteger. Passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para moda e vestuário',
    heroDescription:
      'Grife, loja de roupa, calçados ou acessórios: no varejo de moda, a marca é o produto. Proteja a etiqueta antes de escalar.',
    meta: ['Classe 25 e 35', 'Moda e varejo', 'Atualizado em 2026'],
    lede:
      'Na moda, a marca não acompanha o produto — ela é o produto. A etiqueta é o que diferencia peças parecidas e sustenta o preço. Registrar no INPI garante exclusividade sobre o nome e a estampa da marca em todo o Brasil.',
    intro: [
      'Marcas de moda crescem rápido no Instagram e nos marketplaces, e é exatamente aí que surgem as cópias. Sem registro, você não consegue denunciar falsificações, exigir a retirada de anúncios nem impedir que outra loja use sua etiqueta.',
      'O registro é também o que permite licenciar coleções, fechar com representantes e entrar em grandes varejistas com segurança jurídica.'
    ],
    panorama: [
      'No mercado de moda da Paraíba, 75,9% das empresas ativas são microempreendedores individuais, segundo o Sebrae — um setor pulverizado e competitivo, no qual a marca costuma ser o principal ativo de diferenciação entre negócios de porte semelhante.'
    ],
    fontes: ['Agência Sebrae de Notícias PB (2026)'],
    classes: [
      { code: '25', label: 'Roupas, calçados e chapelaria', note: 'A classe essencial de qualquer marca de moda: peças de vestuário, calçados e acessórios de cabeça.' },
      { code: '35', label: 'Comércio e varejo', note: 'Serviços de loja física e online, e-commerce e representação — importante para quem revende e para lojas multimarcas.' },
      { code: '18', label: 'Bolsas, malas e couro', note: 'Bolsas, mochilas, carteiras, cintos e artigos de couro vendidos com a marca.' },
      { code: '14', label: 'Joias e bijuterias', note: 'Semijoias, bijuterias, relógios e acessórios de metal com marca própria.' }
    ],
    riscos: [
      'Proteger só a roupa (classe 25) e esquecer o comércio (35), quando o negócio é uma loja multimarcas ou e-commerce — a proteção precisa refletir o que a empresa realmente faz.',
      'Adotar nomes em inglês genéricos ("Fashion", "Style", "Wear") ou termos comuns, que costumam ser indeferidos ou já estão registrados.',
      'Vender por marketplaces sem registro: sem a marca protegida, é muito mais difícil acionar as plataformas contra vendedores que copiam a etiqueta.'
    ],
    faq: [
      { q: 'Preciso registrar o logotipo e o nome separados?', a: 'Depende da estratégia. É possível registrar a marca nominativa (só o nome), a figurativa (só o símbolo) ou a mista (nome + logo). Para a maioria das grifes, avaliamos qual combinação dá a melhor proteção pelo melhor custo.' },
      { q: 'Vendo só pela internet, ainda vale registrar?', a: 'Sim, e é ainda mais importante. No ambiente online as cópias aparecem mais rápido, e o registro é o que dá base para pedir a retirada de anúncios e perfis que usam a sua marca.' },
      { q: 'Posso registrar uma marca de roupa sem ter CNPJ?', a: 'Sim. Pessoa física pode registrar marca no INPI, inclusive com direito ao desconto na taxa em muitos casos. Avaliamos a melhor titularidade (pessoa física ou jurídica) na pesquisa inicial.' }
    ]
  },
  {
    slug: 'estetica-e-beleza',
    nome: 'Estética e beleza',
    alvo: 'estética, beleza e cosméticos',
    pill: 'Beleza',
    seoTitle: 'Registro de marca para estética, beleza e cosméticos | Registrium',
    seoDescription:
      'Registro de marca no INPI para salões, clínicas de estética, barbearias e marcas de cosméticos. Classes 44, 3 e 35, panorama do setor. Passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para estética e beleza',
    heroDescription:
      'Salão, barbearia, clínica de estética ou linha de cosméticos: proteja o nome que atrai e fideliza a sua clientela.',
    meta: ['Classe 44 e 3', 'Beleza', 'Atualizado em 2026'],
    lede:
      'O setor de beleza vive de marca e recomendação. O nome do salão, da barbearia ou da linha de cosméticos é o que faz o cliente marcar horário e indicar. Registrar no INPI transforma esse nome em um ativo protegido e transferível.',
    intro: [
      'É um mercado que cresce por franquias e produtos próprios: muitos salões lançam a própria linha de cosméticos, e muitas marcas de cosmético abrem espaços de atendimento. Cada frente exige uma classe diferente de proteção.',
      'Com a marca registrada, é possível franquear o modelo, vender produtos com segurança e impedir que concorrentes usem um nome parecido na mesma cidade.'
    ],
    panorama: [
      'O setor de beleza soma mais de 15 mil pequenos negócios na Paraíba (15.089), dos quais 78% são MEI, segundo o Sebrae. Cabeleireiros, manicures e pedicures lideram, com 10.599 negócios, seguidos por 3.665 negócios de estética e outros cuidados de beleza.',
      'Do lado dos produtos, a Paraíba tem 4.446 lojas de comércio varejista de cosméticos e perfumaria e 37 fábricas do setor (30 microempresas e 7 pequenas empresas) — a cadeia completa que vai do salão à linha de produtos própria, e que só se protege por completo com o registro das classes certas.'
    ],
    fontes: ['Sebrae/PB, via jornal A União e Turismo em Foco (2026)'],
    classes: [
      { code: '44', label: 'Serviços de estética e beleza', note: 'Salões, barbearias, clínicas de estética, spas, manicure, tratamentos capilares e de pele.' },
      { code: '3', label: 'Cosméticos e higiene', note: 'Shampoos, cremes, maquiagem, perfumes e produtos de beleza vendidos com a marca própria.' },
      { code: '35', label: 'Comércio e varejo', note: 'Venda e distribuição dos produtos de beleza, lojas físicas e e-commerce.' },
      { code: '41', label: 'Cursos e formações', note: 'Para quem dá cursos de estética, maquiagem, barbearia ou tricologia com marca própria.' }
    ],
    riscos: [
      'Lançar uma linha de cosméticos protegendo só o serviço (classe 44) — os produtos (classe 3) ficam livres para terceiros registrarem.',
      'Escolher nomes descritivos ("Espaço Beleza", "Studio Hair"), com baixa chance de registro por falta de distintividade.',
      'Abrir franquias sem a marca registrada, o que fragiliza os contratos e abre brecha para ex-franqueados continuarem usando o nome.'
    ],
    faq: [
      { q: 'Tenho salão e quero lançar meus produtos. Um registro cobre tudo?', a: 'Não. O salão é serviço (classe 44) e os cosméticos são produto (classe 3). São proteções distintas; o ideal é registrar ambas para cobrir o negócio por inteiro.' },
      { q: 'Quero franquear meu salão. Preciso registrar antes?', a: 'Sim. A marca registrada é a base do contrato de franquia — é o que você licencia ao franqueado e o que permite retomar o nome se a parceria acabar.' },
      { q: 'Barbearia entra em qual classe?', a: 'Serviços de barbearia estão na classe 44. Se você também vende pomadas, óleos e cosméticos da casa, vale proteger a classe 3.' }
    ]
  },
  {
    slug: 'tecnologia-e-aplicativos',
    nome: 'Tecnologia e aplicativos',
    alvo: 'tecnologia, apps e software',
    pill: 'Tecnologia',
    seoTitle: 'Registro de marca para tecnologia, apps e software | Registrium',
    seoDescription:
      'Registro de marca no INPI para startups, aplicativos, SaaS e empresas de tecnologia. Classes 9, 42 e 38, panorama do ecossistema na Paraíba. Passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para tecnologia e aplicativos',
    heroDescription:
      'Startup, app, SaaS ou software: proteja o nome do produto antes da tração — investidores e lojas de apps vão perguntar por ele.',
    meta: ['Classe 9 e 42', 'Tech e startups', 'Atualizado em 2026'],
    lede:
      'Em tecnologia, o nome do produto viaja mais rápido que a empresa. Um app pode ganhar milhares de usuários em semanas, e é nesse momento que a falta de registro vira um problema caro. Proteger a marca no INPI é parte da estrutura básica de qualquer produto digital.',
    intro: [
      'Investidores, aceleradoras e as próprias lojas de aplicativos avaliam a titularidade da marca. Um pedido de registro em andamento já demonstra diligência e reduz o risco de precisar renomear o produto depois de escalar.',
      'Como marcas de tecnologia frequentemente usam nomes inventados, a chance de registro costuma ser boa — mas a pesquisa prévia é essencial para não colidir com marcas internacionais já depositadas no Brasil.'
    ],
    panorama: [
      'A Paraíba tem 418 startups ativas, com João Pessoa à frente como principal polo de tecnologia do estado. Campina Grande, por sua vez, sedia o PaqTcPB — Parque Tecnológico da Paraíba, fundado em 1984 e um dos três primeiros parques tecnológicos do Brasil, reunindo universidades (UFCG, UFPB, UEPB, IFPB), Sebrae, Embrapa e Insa em torno de TI, automação industrial, conectividade, saúde digital, educação 4.0, biotecnologia e energias renováveis.',
      'Campina Grande também sedia a FETECH, feira de tecnologia criada em 1988 que chegou à 15ª edição em 2026 — um dos maiores eventos de inovação do Nordeste. É a prova de um ecossistema consolidado, mas onde a proteção formal da marca ainda é um passo que muita startup deixa para depois da tração, com risco de precisar renomear o produto já com usuários.'
    ],
    fontes: ['PaqTcPB (paqtc.org.br)', 'WSCOM Economia (jun. 2026)', 'Governo da Paraíba / Fapesq (2026)'],
    classes: [
      { code: '9', label: 'Software e aplicativos', note: 'Programas de computador, aplicativos, plataformas baixáveis, hardware e dispositivos eletrônicos.' },
      { code: '42', label: 'Desenvolvimento e SaaS', note: 'Serviços de tecnologia: desenvolvimento de software, plataformas em nuvem (SaaS), consultoria e hospedagem.' },
      { code: '35', label: 'Publicidade e negócios', note: 'Marketplaces, plataformas de anúncios, gestão de negócios e serviços de intermediação comercial.' },
      { code: '38', label: 'Telecomunicações', note: 'Serviços de comunicação, mensageria, streaming e transmissão de dados.' }
    ],
    riscos: [
      'Registrar só o app (classe 9) quando o negócio é um SaaS (classe 42), ou vice-versa — a proteção precisa refletir se você entrega um produto ou um serviço.',
      'Escalar o produto antes do registro e descobrir tarde que o nome já pertence a outra empresa, forçando um rebranding com o produto já conhecido.',
      'Confundir registro de marca com registro de software (este último protege o código, não o nome comercial) — são proteções diferentes e complementares.'
    ],
    faq: [
      { q: 'Marca e registro de software são a mesma coisa?', a: 'Não. O registro de programa de computador protege o código-fonte; o registro de marca protege o nome e a identidade do produto. Startups geralmente precisam dos dois, e ambos são feitos junto ao INPI.' },
      { q: 'Meu app é global. O registro no Brasil basta?', a: 'O registro no INPI protege a marca no território nacional. Para outros países é preciso registrar localmente ou via Protocolo de Madri. Começar pelo Brasil garante a base do seu mercado principal.' },
      { q: 'Ainda estou validando a ideia. Vale registrar agora?', a: 'Se há intenção real de lançar, registrar cedo garante prioridade e evita o retrabalho de renomear depois da tração. A data do pedido é o que assegura seu direito sobre pedidos futuros de terceiros.' }
    ]
  },
  {
    slug: 'educacao-e-cursos',
    nome: 'Educação e cursos',
    alvo: 'educação, cursos e treinamentos',
    pill: 'Educação',
    seoTitle: 'Registro de marca para educação, cursos e treinamentos | Registrium',
    seoDescription:
      'Registro de marca no INPI para escolas, cursos, infoprodutos e mentorias. Classe 41 e afins, panorama do setor. Passo a passo com a Registrium.',
    heroTitle: 'Registro de marca para educação e cursos',
    heroDescription:
      'Escola, curso livre, mentoria ou infoproduto: proteja o nome do método antes que ele seja copiado por quem viu funcionar.',
    meta: ['Classe 41 e afins', 'Educação', 'Atualizado em 2026'],
    lede:
      'No mercado de educação, o nome do curso ou do método é o que carrega autoridade e diferencia a oferta. Registrar a marca no INPI protege esse nome contra cópias e é o que permite licenciar, franquear e vender turmas com segurança.',
    intro: [
      'Infoprodutores e mentores constroem marcas pessoais e de método que se espalham rápido — e são copiadas com a mesma velocidade. Sem registro, é difícil impedir que outra pessoa use o nome do seu curso ou lance uma versão "igual".',
      'Escolas e cursos livres com planos de expansão ou franquia dependem do registro para crescer mantendo a exclusividade do nome em todo o país.'
    ],
    panorama: [
      'O Sebrae mantém programas de educação empreendedora presenciais e online em polos como Campina Grande e João Pessoa, incluindo trilhas voltadas à gestão de cursos, mentorias e negócios de conhecimento — reflexo de um mercado que cresce junto com o número de infoprodutores e escolas livres no estado, muitos deles sem o nome do método ou do curso protegido.'
    ],
    fontes: ['Agência Sebrae de Notícias PB (2026)'],
    classes: [
      { code: '41', label: 'Educação e treinamento', note: 'A classe central: cursos, escolas, treinamentos, mentorias, workshops, produção de conteúdo e entretenimento.' },
      { code: '9', label: 'Conteúdo digital', note: 'Cursos gravados, e-books, aplicativos e materiais didáticos em formato digital (downloadáveis).' },
      { code: '16', label: 'Material impresso', note: 'Apostilas, livros, cadernos e material didático físico com a marca.' },
      { code: '35', label: 'Publicidade e negócios', note: 'Para quem também presta consultoria, gestão ou serviços de marketing sob a mesma marca.' }
    ],
    riscos: [
      'Registrar só o material impresso ou o app e esquecer a classe 41, que é a que realmente protege o serviço educacional.',
      'Usar nomes descritivos ("Curso de Inglês", "Escola de Vendas"), difíceis de registrar por falta de distintividade.',
      'Vender um método de sucesso sem registro e ver o nome ser usado por ex-alunos ou concorrentes, sem base jurídica para impedir.'
    ],
    faq: [
      { q: 'Vendo curso online. Preciso registrar em qual classe?', a: 'O serviço de educação e treinamento fica na classe 41, que cobre cursos presenciais e online. Se você distribui conteúdo digital baixável (app, e-book), vale também a classe 9.' },
      { q: 'Posso registrar o nome do meu método?', a: 'Sim, desde que seja distintivo. Nomes de método próprios são registráveis e frequentemente valiosos; nomes puramente descritivos do que ensinam tendem a ser indeferidos.' },
      { q: 'Sou pessoa física, dou mentorias. Consigo registrar?', a: 'Sim. Pessoa física pode registrar marca no INPI, muitas vezes com direito ao desconto na taxa. Avaliamos a melhor titularidade na pesquisa de viabilidade.' }
    ]
  }
];

export function getSegmento(slug: string): Segmento | undefined {
  return segmentos.find((s) => s.slug === slug);
}
