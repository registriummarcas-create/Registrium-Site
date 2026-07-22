import { describe, expect, it } from 'vitest';
import { resolveAllowedOrigin } from '../src/lib/cors';

describe('resolveAllowedOrigin', () => {
  it('aceita origem configurada', () => {
    expect(resolveAllowedOrigin('https://registrium.pages.dev', 'http://localhost:4321,https://registrium.pages.dev')).toBe('https://registrium.pages.dev');
  });
  it('rejeita origem desconhecida', () => {
    expect(resolveAllowedOrigin('https://example.com', 'https://registrium.pages.dev')).toBeNull();
  });
});
