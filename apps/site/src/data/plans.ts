export const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    who: 'MEI e Pessoa Física',
    tagline: 'Para quem quer o nome garantido, sem complicação.',
    price: 'R$ 680',
    priceNote: 'à vista',
    installment: 'ou 12x de R$ 66,67 no cartão',
    inpiNote: 'Taxa do INPI: R$ 440, paga direto ao órgão',
    featured: false,
    // Pix/à vista já com 15% de desconto; cartão é o valor cheio parcelado em até 12x.
    pixValue: 680,
    cardTotal: 800,
    cardInstallments: 12,
    eligibleProfiles: ['pf', 'mei'],
    items: [
      '1 pedido de registro de marca',
      'Pesquisa de viabilidade completa no banco do INPI',
      'Protocolo em até 48h após a contratação',
      '1 ano de acompanhamento e vigilância',
      'Certificado válido por 10 anos'
    ],
    cta: 'Quero o Plano Bronze',
    whatsappMessage: 'Olá! Quero o Plano Bronze para registrar minha marca.'
  },
  {
    id: 'prata',
    name: 'Prata',
    who: 'ME e EPP',
    tagline: 'Registro com rede de proteção.',
    price: 'R$ 1.487,50',
    priceNote: 'à vista',
    installment: 'ou 12x de R$ 145,83 no cartão',
    inpiNote: 'Taxa do INPI: R$ 440, paga direto ao órgão',
    featured: true,
    badge: 'Mais escolhido',
    pixValue: 1487.5,
    cardTotal: 1750,
    cardInstallments: 12,
    eligibleProfiles: ['pf', 'mei', 'meepp'],
    items: [
      'Tudo do Bronze',
      '2 anos de acompanhamento e vigilância',
      'Buscas e análises ilimitadas',
      'Alerta se alguém depositar marca parecida com a sua'
    ],
    footnote: 'Se o INPI indeferir, refazemos o pedido. Você paga apenas a nova taxa oficial.',
    cta: 'Quero o Plano Prata',
    whatsappMessage: 'Olá! Quero o Plano Prata para registrar minha marca.'
  },
  {
    id: 'ouro',
    name: 'Ouro',
    who: 'Proteção completa',
    tagline: 'Para quem tem mais de um nome a defender.',
    price: 'Sob consulta',
    priceNote: 'com diagnóstico gratuito antes de qualquer valor',
    inpiNote: 'Taxa do INPI: R$ 880 por classe',
    featured: false,
    pixValue: null,
    cardTotal: null,
    cardInstallments: null,
    eligibleProfiles: ['pf', 'mei', 'meepp', 'demais'],
    items: [
      'Tudo do Prata',
      'Formas de apresentação e classes adicionais',
      'Oposições, manifestações e recursos conduzidos pela Registrium por 2 anos',
      'Monitoramento contínuo após o registro e gestão da renovação'
    ],
    footnote: 'Se o INPI indeferir, refazemos o pedido. Você paga apenas a nova taxa oficial.',
    cta: 'Quero um diagnóstico gratuito',
    whatsappMessage: 'Olá! Quero um diagnóstico gratuito para a minha marca.'
  }
] as const;
