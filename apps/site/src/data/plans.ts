export const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    category: 'Essencial',
    who: 'MEI e Pessoa Física',
    tagline: 'Para quem deseja iniciar o registro com segurança, clareza e acompanhamento profissional.',
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
    category: 'Estratégico',
    who: 'ME e EPP',
    tagline: 'Para quem busca cobertura ampliada durante o processo e maior proteção contra contingências.',
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
    footnote: 'Se o INPI indeferir, refazemos o pedido sem novos honorários. A nova taxa oficial do INPI permanece devida.',
    cta: 'Quero o Plano Prata',
    whatsappMessage: 'Olá! Quero o Plano Prata para registrar minha marca.'
  },
  {
    id: 'ouro',
    name: 'Ouro',
    category: 'Integral',
    who: 'Proteção completa',
    tagline: 'Para marcas que exigem acompanhamento máximo, vigilância e resposta completa aos riscos do processo.',
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
    footnote: 'Se o INPI indeferir, refazemos o pedido sem novos honorários. A nova taxa oficial do INPI permanece devida.',
    cta: 'Quero um diagnóstico gratuito',
    whatsappMessage: 'Olá! Quero um diagnóstico gratuito para a minha marca.'
  }
] as const;
