export const includedGroups = [
  {
    label: 'Pré-registro',
    items: [
      'Pesquisa de viabilidade completa no banco de dados do INPI',
      'Consultoria personalizada: análise de riscos e oportunidades e orientação para decisão',
      'Definição da melhor forma de apresentação da marca',
      'Estudo e montagem: adequação da logomarca, classificação pelo Acordo de Nice e verificação de legitimidade das atividades',
      'Emissão da GRU para pagamento das taxas federais'
    ]
  },
  {
    label: 'Durante o processo',
    items: [
      'Protocolo formal do pedido de registro no INPI',
      'Acompanhamento diário e notificação de situações contingenciais',
      'Confecção dos documentos legais e relatório mensal de andamento',
      'Defesa total em caso de oposições',
      'Emissão do certificado de registro válido por 10 anos'
    ]
  }
] as const;

export const inpiFees = [
  { label: 'Pedido de registro (por classe)', full: 'R$ 880,00', discounted: 'R$ 440,00' },
  { label: 'Manifestação à oposição', full: 'R$ 180,00', discounted: 'R$ 90,00' },
  { label: 'Cumprimento de exigência', full: 'R$ 180,00', discounted: 'R$ 90,00' }
] as const;

export const guarantees = [
  {
    icon: '<path d="M7 3h7l4 4v14H7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 13l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    title: 'Direito sobre a marca por 10 anos',
    description: 'O certificado funciona como a escritura da sua marca: você pode vender, licenciar e franquear (só marcas registradas podem franquear).',
    result: 'Um ativo que você pode negociar, licenciar ou usar como garantia do negócio.'
  },
  {
    icon: '<path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.6C7.9 18.4 5 15.2 5 11V6l7-3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 11.5l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    title: 'Novo pedido grátis',
    description: 'Nos planos Prata e Ouro, se a marca for indeferida, refazemos o pedido sem nenhum custo adicional.',
    result: 'Você não paga duas vezes por um risco que já era nosso de gerenciar.'
  },
  {
    icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    title: 'Pagamento único, sem pegadinhas',
    description: 'Custos reduzidos por software que controla os processos e faz a colidência com IA. Você paga um valor só.',
    result: 'Sabe o valor total no dia da contratação — sem cobrança surpresa depois.'
  }
] as const;
