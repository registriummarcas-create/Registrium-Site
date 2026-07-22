import test from 'node:test';
import assert from 'node:assert/strict';

function buildWhatsAppUrl(number, message) {
  const normalizedNumber = number.replace(/\D/g, '');
  if (!normalizedNumber) return '#formulario';
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

test('normaliza telefone e codifica mensagem', () => {
  assert.equal(buildWhatsAppUrl('+55 (83) 99999-0000', 'Olá marca'), 'https://wa.me/5583999990000?text=Ol%C3%A1%20marca');
});

test('usa formulário quando não há número', () => {
  assert.equal(buildWhatsAppUrl('', 'Olá'), '#formulario');
});
