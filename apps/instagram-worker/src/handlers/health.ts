import { jsonResponse } from '../lib/response';

export function handleHealth(headers: Record<string, string>): Response {
  return jsonResponse({ status: 'ok', service: 'registrium-instagram', timestamp: new Date().toISOString() }, 200, headers);
}
