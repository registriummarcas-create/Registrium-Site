// Motor de correspondência entre atividade econômica (CNAE 2.3) e classe da
// Classificação de Nice (usada pelo INPI para registro de marca).
//
// Não existe um crosswalk oficial CNAE -> Nice. Esta tabela é uma inferência
// própria, em duas camadas:
//   1) um padrão por divisão da CNAE (~84 entradas), confiável para divisões
//      de serviço, onde a atividade já indica a classe com boa precisão;
//   2) uma lista de overrides por palavra-chave, testados apenas dentro da
//      divisão para a qual foram desenhados (nunca globalmente — um termo
//      como "revista" só deve reclassificar uma subclasse de impressão/edição,
//      nunca uma agência de publicidade que apenas cita revista como canal de
//      veiculação), usada quando o produto fabricado — não a divisão em si —
//      é que define a classe (ex.: "fabricação de produtos alimentícios"
//      cobre carnes, farinha, doces e ração animal, cada um numa classe
//      diferente da Nice).
//
// A correspondência roda só sobre a `descricao` oficial da subclasse (curta e
// precisa), nunca sobre a lista de sinônimos (`atividades` da CNAE), que é
// longa e cheia de exemplos incidentais que não representam a atividade
// principal.
//
// Por isso toda página que usa este motor exibe a mesma ressalva já usada em
// SegmentoPage.astro: a classe sugerida é um ponto de partida, confirmado na
// pesquisa de viabilidade — nunca uma promessa de que é a classe definitiva.

export interface NiceClasse {
  code: string;
  label: string;
}

export const NICE_CLASS_LABELS: Record<string, string> = {
  '1': 'Produtos químicos industriais e científicos',
  '2': 'Tintas, vernizes e produtos anticorrosivos',
  '3': 'Cosméticos e produtos de limpeza',
  '4': 'Óleos, combustíveis e velas',
  '5': 'Produtos farmacêuticos e veterinários',
  '6': 'Metais comuns e materiais de construção metálicos',
  '7': 'Máquinas e máquinas-ferramentas',
  '8': 'Ferramentas manuais',
  '9': 'Software, eletrônicos e aparelhos científicos',
  '10': 'Aparelhos médicos e cirúrgicos',
  '11': 'Aparelhos de iluminação, aquecimento e refrigeração',
  '12': 'Veículos e aparelhos de locomoção',
  '13': 'Armas de fogo e artigos pirotécnicos',
  '14': 'Metais preciosos, joias e relógios',
  '15': 'Instrumentos musicais',
  '16': 'Papel, papelão e artigos de escritório',
  '17': 'Borracha, plásticos e materiais de vedação',
  '18': 'Couro, bolsas e artigos de viagem',
  '19': 'Materiais de construção não-metálicos',
  '20': 'Móveis e artigos de madeira, cortiça e plástico',
  '21': 'Utensílios domésticos e de cozinha',
  '22': 'Cordas, redes, lonas e sacos',
  '23': 'Fios e linhas têxteis',
  '24': 'Tecidos e roupas de cama e mesa',
  '25': 'Vestuário, calçados e chapelaria',
  '26': 'Rendas, bordados e armarinhos',
  '27': 'Tapetes e revestimentos de piso',
  '28': 'Jogos, brinquedos e artigos esportivos',
  '29': 'Carnes, peixes, aves e alimentos processados',
  '30': 'Café, pães, doces e condimentos',
  '31': 'Produtos agrícolas não processados e animais vivos',
  '32': 'Cervejas e bebidas não alcoólicas',
  '33': 'Bebidas alcoólicas, exceto cervejas',
  '34': 'Tabaco e artigos para fumantes',
  '35': 'Publicidade, gestão de negócios e comércio',
  '36': 'Seguros e negócios financeiros e imobiliários',
  '37': 'Construção, reparo e instalação',
  '38': 'Telecomunicações',
  '39': 'Transporte, embalagem e armazenagem',
  '40': 'Tratamento de materiais e geração de energia',
  '41': 'Educação, treinamento e entretenimento',
  '42': 'Serviços científicos e tecnológicos, desenvolvimento de software',
  '43': 'Alimentação e alojamento temporário',
  '44': 'Serviços médicos, veterinários, de beleza e agricultura',
  '45': 'Serviços jurídicos, de segurança e pessoais'
};

interface RegraClasse {
  primaria: string;
  secundarias?: string[];
}

// Padrão por divisão (id de 2 dígitos, ex.: "01", "62"). Cobre as 84 divisões
// da CNAE 2.3 que sobram depois de excluir as seções O/T/U (ver generate-cnae.mjs).
export const CLASSE_POR_DIVISAO: Record<string, RegraClasse> = {
  // A — Agricultura, pecuária, produção florestal, pesca e aquicultura
  '01': { primaria: '31', secundarias: ['44'] },
  '02': { primaria: '31' },
  '03': { primaria: '31', secundarias: ['29'] },
  // B — Indústrias extrativas
  '05': { primaria: '4' },
  '06': { primaria: '4' },
  '07': { primaria: '6' },
  '08': { primaria: '19' },
  '09': { primaria: '40', secundarias: ['42'] },
  // C — Indústrias de transformação (padrão da divisão; overrides tratam os casos específicos)
  '10': { primaria: '29', secundarias: ['30'] },
  '11': { primaria: '32', secundarias: ['33'] },
  '12': { primaria: '34' },
  '13': { primaria: '24', secundarias: ['23'] },
  '14': { primaria: '25' },
  '15': { primaria: '25', secundarias: ['18'] },
  '16': { primaria: '20', secundarias: ['19'] },
  '17': { primaria: '16' },
  '18': { primaria: '40', secundarias: ['16'] },
  '19': { primaria: '4' },
  '20': { primaria: '1' },
  '21': { primaria: '5' },
  '22': { primaria: '17', secundarias: ['12'] },
  '23': { primaria: '19', secundarias: ['21'] },
  '24': { primaria: '6' },
  '25': { primaria: '6', secundarias: ['8'] },
  '26': { primaria: '9' },
  '27': { primaria: '9', secundarias: ['11'] },
  '28': { primaria: '7', secundarias: ['8'] },
  '29': { primaria: '12' },
  '30': { primaria: '12' },
  '31': { primaria: '20' },
  '32': { primaria: '21', secundarias: ['28'] },
  '33': { primaria: '37' },
  // D — Eletricidade e gás
  '35': { primaria: '40', secundarias: ['4'] },
  // E — Água, esgoto, resíduos e descontaminação
  '36': { primaria: '40' },
  '37': { primaria: '40' },
  '38': { primaria: '40' },
  '39': { primaria: '40' },
  // F — Construção
  '41': { primaria: '37' },
  '42': { primaria: '37' },
  '43': { primaria: '37' },
  // G — Comércio; reparação de veículos automotores e motocicletas
  '45': { primaria: '35', secundarias: ['37'] },
  '46': { primaria: '35' },
  '47': { primaria: '35' },
  // H — Transporte, armazenagem e correio
  '49': { primaria: '39' },
  '50': { primaria: '39' },
  '51': { primaria: '39' },
  '52': { primaria: '39' },
  '53': { primaria: '39' },
  // I — Alojamento e alimentação
  '55': { primaria: '43' },
  '56': { primaria: '43' },
  // J — Informação e comunicação
  '58': { primaria: '41', secundarias: ['16'] },
  '59': { primaria: '41' },
  '60': { primaria: '41', secundarias: ['38'] },
  '61': { primaria: '38' },
  '62': { primaria: '42' },
  '63': { primaria: '42', secundarias: ['41'] },
  // K — Atividades financeiras, de seguros e serviços relacionados
  '64': { primaria: '36' },
  '65': { primaria: '36' },
  '66': { primaria: '36' },
  // L — Atividades imobiliárias
  '68': { primaria: '36' },
  // M — Atividades profissionais, científicas e técnicas
  '69': { primaria: '45', secundarias: ['35'] },
  '70': { primaria: '35' },
  '71': { primaria: '42' },
  '72': { primaria: '42' },
  '73': { primaria: '35' },
  '74': { primaria: '42', secundarias: ['41'] },
  '75': { primaria: '44' },
  // N — Atividades administrativas e serviços complementares
  '77': { primaria: '35', secundarias: ['39'] },
  '78': { primaria: '35' },
  '79': { primaria: '39' },
  '80': { primaria: '45' },
  '81': { primaria: '37', secundarias: ['44'] },
  '82': { primaria: '35' },
  // P — Educação
  '85': { primaria: '41' },
  // Q — Saúde humana e serviços sociais
  '86': { primaria: '44' },
  '87': { primaria: '44', secundarias: ['43'] },
  '88': { primaria: '45' },
  // R — Artes, cultura, esporte e recreação
  '90': { primaria: '41' },
  '91': { primaria: '41' },
  '92': { primaria: '41' },
  '93': { primaria: '41' },
  // S — Outras atividades de serviços
  '94': { primaria: '45', secundarias: ['35'] },
  '95': { primaria: '37' },
  '96': { primaria: '44', secundarias: ['37'] }
};

interface Override {
  divisoes: string[];
  palavras: string[];
  primaria: string;
  secundarias?: string[];
  padrao: RegExp;
}

// Letras latinas minúsculas + acentuadas (Latin-1 Supplement). Sob a flag /i o
// V8 casa também as maiúsculas correspondentes — evita o bug clássico do \b
// nativo do JS, que não reconhece á/ã/ç/õ como caractere de palavra e por
// isso falha (ou casa errado) logo depois de uma letra acentuada.
const LETRA = 'a-zà-öø-ÿ';

function escapeRegExp(texto: string): string {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function regra(divisoes: string[], palavras: string[], primaria: string, secundarias?: string[]): Override {
  const alternativas = palavras.map(escapeRegExp).join('|');
  return {
    divisoes,
    palavras,
    primaria,
    secundarias,
    padrao: new RegExp(`(?<![${LETRA}])(?:${alternativas})(?![${LETRA}])`, 'i')
  };
}

// Overrides por palavra-chave, testados apenas dentro das divisões listadas —
// nunca globalmente — e apenas contra a descrição oficial da subclasse.
export const OVERRIDES_PALAVRA_CHAVE: Override[] = [
  // Divisão 10 — fabricação de produtos alimentícios
  regra(['10'], ['leite', 'laticínio', 'laticínios', 'queijo', 'iogurte', 'manteiga'], '29'),
  regra(['10'], ['carne', 'carnes', 'abate', 'frigorífico', 'charque', 'linguiça', 'embutidos'], '29'),
  regra(['10'], ['pescado', 'peixe', 'peixes', 'camarão', 'crustáceo', 'crustáceos'], '29'),
  regra(['10'], ['conserva', 'conservas', 'fruta', 'frutas', 'legume', 'legumes', 'hortaliça', 'hortaliças', 'azeitona', 'azeitonas'], '29'),
  regra(['10'], ['óleo', 'óleos', 'azeite', 'gordura', 'gorduras', 'margarina'], '29'),
  regra(['10'], ['farinha', 'moagem', 'amido', 'fécula'], '30'),
  regra(['10'], ['pão', 'pães', 'panificação', 'biscoito', 'biscoitos', 'bolacha', 'bolachas', 'massas alimentícias', 'macarrão'], '30'),
  regra(['10'], ['açúcar'], '30'),
  regra(['10'], ['chocolate', 'cacau', 'balas', 'doce', 'doces', 'confeitaria', 'sorvete', 'sorvetes', 'gelados'], '30'),
  regra(['10'], ['café', 'chá'], '30'),
  regra(['10'], ['condimento', 'condimentos', 'molho', 'molhos', 'tempero', 'temperos', 'vinagre', 'especiaria', 'especiarias'], '30'),
  regra(['10'], ['ração', 'rações', 'alimentos para animais'], '31'),
  // Divisão 11 — fabricação de bebidas
  regra(['11'], ['aguardente', 'destilados', 'vinho', 'vinhos', 'licor', 'licores', 'uísque', 'vodca', 'cachaça'], '33'),
  regra(['11'], ['cerveja', 'cervejas', 'chope', 'malte'], '32'),
  // Divisão 13 — fabricação de produtos têxteis
  regra(['13'], ['fiação', 'fibras têxteis'], '23'),
  // Divisão 15 — couro, artigos de viagem e calçados (calçado antes de couro)
  regra(['15'], ['calçado', 'calçados', 'sapato', 'sapatos', 'tênis', 'sandália', 'sandálias'], '25'),
  regra(['15'], ['bolsa', 'bolsas', 'mala', 'malas', 'artigos de viagem'], '18'),
  regra(['15'], ['curtimento', 'couro', 'couros'], '18'),
  // Divisão 16 — fabricação de produtos de madeira
  regra(['16'], ['estruturas de madeira', 'esquadrias'], '19'),
  // Divisão 18 — impressão e reprodução de gravações
  regra(['18'], ['livro', 'livros', 'jornal', 'jornais', 'revista', 'revistas'], '16'),
  // Divisão 20 — fabricação de produtos químicos
  regra(['20'], ['limpeza', 'sabão', 'sabões', 'detergente', 'detergentes', 'amaciante', 'desinfetante', 'desinfetantes'], '3'),
  regra(['20'], ['cosméticos', 'perfumaria', 'higiene pessoal'], '3'),
  regra(['20'], ['adubo', 'adubos', 'fertilizante', 'fertilizantes'], '1'),
  regra(['20'], ['defensivo agrícola', 'defensivos agrícolas', 'agrotóxico', 'agrotóxicos', 'inseticida', 'inseticidas', 'praguicida', 'praguicidas'], '5'),
  regra(['20'], ['tinta', 'tintas', 'verniz', 'vernizes', 'esmalte', 'esmaltes'], '2'),
  regra(['20'], ['explosivo', 'explosivos', 'fogos de artifício', 'munição', 'munições'], '13'),
  // Divisão 22 — fabricação de produtos de borracha e de material plástico
  regra(['22'], ['pneu', 'pneus', 'câmaras de ar'], '12'),
  // Divisão 23 — fabricação de produtos de minerais não-metálicos
  // ("vidro" sozinho não vira override: cobre tanto vidro plano/construção
  // quanto utensílio doméstico, e o padrão da divisão (19, secundária 21) já
  // reflete essa ambiguidade melhor do que cravar uma classe só.
  regra(['23', '32'], ['lapidação', 'pedras preciosas', 'gemas'], '14'),
  // Divisão 25 — fabricação de produtos de metal
  regra(['25'], ['ferramentas manuais', 'alicate', 'alicates'], '8'),
  regra(['25'], ['armas de fogo', 'munição', 'munições', 'artigos bélicos'], '13'),
  regra(['25'], ['talheres', 'panelas', 'utensílios de cozinha'], '21'),
  // Divisão 27 — fabricação de máquinas, aparelhos e materiais elétricos
  regra(['27'], ['iluminação', 'lâmpada', 'lâmpadas', 'luminária', 'luminárias'], '11'),
  regra(['27'], ['fogão', 'fogões', 'refrigerador', 'refrigeradores', 'geladeira', 'geladeiras'], '11'),
  // Divisão 28 — fabricação de máquinas e equipamentos
  regra(['28'], ['ferramentas manuais'], '8'),
  // Divisão 32 — fabricação de produtos diversos
  regra(['32'], ['joias', 'joalheria', 'bijuteria', 'bijuterias', 'relógios', 'moedas', 'medalhas'], '14'),
  regra(['32'], ['instrumentos musicais'], '15'),
  regra(['32'], ['brinquedo', 'brinquedos', 'jogo', 'jogos', 'esporte', 'esportivo', 'esportivos', 'pesca', 'bilhar', 'sinuca'], '28'),
  regra(['32'], ['médico', 'cirúrgico', 'cirúrgica', 'odontológico', 'odontologia', 'ortopédico', 'prótese', 'próteses', 'órtese', 'órteses'], '10'),
  regra(['32'], ['óptico', 'ópticos', 'óptica', 'ótico', 'óticos'], '9'),
  regra(['32'], ['proteção e segurança', 'segurança pessoal', 'equipamentos de proteção'], '9'),
  regra(['32'], ['canetas', 'lápis', 'material de escritório'], '16'),
  regra(['32'], ['vassouras', 'escovas', 'pincéis'], '21'),
  regra(['32'], ['guarda chuva', 'guarda chuvas', 'guarda-chuva', 'guarda-chuvas', 'bengala', 'bengalas'], '18'),
  regra(['32'], ['aviamentos'], '26'),
  regra(['32'], ['velas'], '4'),
  regra(['32'], ['letreiros luminosos', 'painéis luminosos'], '11'),
  // Divisão 45 — comércio e reparação de veículos automotores e motocicletas
  regra(['45'], ['manutenção e reparação', 'reparação de veículos', 'retífica de motores'], '37'),
  // Divisão 69 — atividades jurídicas, de contabilidade e de auditoria
  regra(['69'], ['contabilidade', 'auditoria', 'escrituração fiscal'], '35'),
  // Divisão 74 — outras atividades profissionais, científicas e técnicas
  regra(['74'], ['fotografia', 'fotográficas'], '41'),
  regra(['74'], ['tradução', 'interpretação'], '41'),
  // Divisão 77 — aluguéis não-imobiliários
  regra(['77'], ['aluguel de automóveis', 'aluguel de veículos', 'locação de veículos'], '39'),
  // Divisão 81 — serviços para edifícios e atividades paisagísticas
  regra(['81'], ['paisagismo', 'jardinagem'], '44'),
  // Divisão 96 — outras atividades de serviços pessoais
  regra(['96'], ['lavanderia', 'lavanderias', 'tinturaria'], '37'),
  regra(['96'], ['funerárias', 'cerimônias fúnebres', 'cemitérios'], '45'),
  regra(['96'], ['agências matrimoniais', 'sites de relacionamento pessoal'], '45')
];

function montarClasses(regra: RegraClasse): { primaria: NiceClasse; secundarias: NiceClasse[] } {
  const rotular = (code: string): NiceClasse => ({ code, label: NICE_CLASS_LABELS[code] ?? 'Classe do INPI' });
  return {
    primaria: rotular(regra.primaria),
    secundarias: (regra.secundarias ?? []).map(rotular)
  };
}

export function inferirClassesNice(atividade: {
  descricao: string;
  divisaoId: string;
}): { primaria: NiceClasse; secundarias: NiceClasse[] } {
  for (const override of OVERRIDES_PALAVRA_CHAVE) {
    if (override.divisoes.includes(atividade.divisaoId) && override.padrao.test(atividade.descricao)) {
      return montarClasses(override);
    }
  }
  const padraoDivisao = CLASSE_POR_DIVISAO[atividade.divisaoId] ?? { primaria: '35' };
  return montarClasses(padraoDivisao);
}
