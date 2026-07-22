import type { Env } from './types/env';
import { resolveAllowedOrigin, corsHeaders } from './lib/cors';
import { jsonResponse } from './lib/response';
import { handleHealth } from './handlers/health';
import { handleFeed } from './handlers/feed';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = resolveAllowedOrigin(request.headers.get('Origin'), env.ALLOWED_ORIGINS || '');
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: origin ? 204 : 403, headers });
    }
    if (request.method !== 'GET') {
      return jsonResponse({ error: 'method_not_allowed' }, 405, headers);
    }
    if (url.pathname === '/health') return handleHealth(headers);
    if (url.pathname === '/feed') return handleFeed(request, env, headers);
    return jsonResponse({ error: 'not_found' }, 404, headers);
  }
};
