export function buildWhatsAppUrl(number: string, message: string): string {
  const normalizedNumber = number.replace(/\D/g, '');
  if (!normalizedNumber) return '#formulario';
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
