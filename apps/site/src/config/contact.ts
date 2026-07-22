export const contactConfig = {
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'atendimento@registrium.com.br',
  whatsappNumber: (import.meta.env.PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  whatsappMessage:
    import.meta.env.PUBLIC_WHATSAPP_MESSAGE ||
    'Olá! Acabei de solicitar uma análise pelo site da Registrium e gostaria de continuar o atendimento.',
  instagramUrl: import.meta.env.PUBLIC_INSTAGRAM_URL || '#'
} as const;
