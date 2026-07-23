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
      'Defesa total em caso de oposições, sem honorários adicionais',
      'Manifestações e recursos conduzidos pela equipe, dentro do escopo do plano contratado',
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
    icon: '<circle cx="7" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M11 12h9M16 12v4M19 12v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/>',
    title: 'Direito sobre a marca por 10 anos',
    description: 'O certificado funciona como a escritura da sua marca: você pode vender, licenciar e franquear (só marcas registradas podem franquear).',
    result: 'Um ativo que você pode negociar, licenciar ou usar como garantia do negócio.'
  },
  {
    icon: '<path d="M5 16 12 7l7 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter"/><path d="M12 7v13" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/>',
    title: 'Novo pedido sem novos honorários',
    description: 'Nos planos Prata e Ouro, se a marca for indeferida, refazemos o pedido sem nova cobrança de honorários. A nova taxa oficial permanece devida diretamente ao INPI.',
    result: 'Você não paga duas vezes por um risco que já era nosso de gerenciar.'
  },
  {
    icon: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    title: 'Pagamento único, sem pegadinhas',
    description: 'Custos reduzidos por software que controla os processos e faz a colidência com inteligência artificial. Você paga um valor só.',
    result: 'Sabe o valor total no dia da contratação — sem cobrança surpresa depois.'
  }
] as const;
