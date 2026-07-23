export const contactConfig = {
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'registriummarcas@gmail.com',
  phoneDisplay: '(83) 9.9132-7014',
  whatsappNumber: (import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5583991327014').replace(/\D/g, ''),
  whatsappMessage:
    import.meta.env.PUBLIC_WHATSAPP_MESSAGE ||
    'Oi! Vim do site e quero registrar a marca [nome].',
  instagramUrl: import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/registriummarcas',
  instagramHandle: '@registriummarcas',
  cnpj: '48.978.110/0001-59'
} as const;
