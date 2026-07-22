export function resolveAllowedOrigin(requestOrigin: string | null, configuredOrigins: string): string | null {
  if (!requestOrigin) return null;
  const allowed = configuredOrigins.split(',').map((value) => value.trim()).filter(Boolean);
  return allowed.includes(requestOrigin) ? requestOrigin : null;
}

export function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}
