import type { Env } from '../types/env';
import { jsonResponse } from '../lib/response';
import { fetchInstagramFeed } from '../lib/instagram-client';

export async function handleFeed(request: Request, env: Env, headers: Record<string, string>): Promise<Response> {
  const ttl = Math.min(Math.max(Number(env.CACHE_TTL_SECONDS) || 3600, 300), 10800);
  const cache = caches.default;
  const cacheKey = new Request(new URL('/feed', request.url).toString(), request);
  const cached = await cache.match(cacheKey);

  if (cached) {
    const payload = (await cached.json()) as Record<string, unknown>;
    return jsonResponse({ ...payload, cached: true }, 200, { ...headers, 'Cache-Control': `public, max-age=${ttl}` });
  }

  try {
    const items = await fetchInstagramFeed(env);
    const payload = { success: true, items, source: 'instagram', cached: false, updatedAt: new Date().toISOString() };
    const response = jsonResponse(payload, 200, { ...headers, 'Cache-Control': `public, max-age=${ttl}` });
    await cache.put(cacheKey, response.clone());
    return response;
  } catch (error) {
    console.error('Falha sanitizada ao atualizar feed do Instagram.');
    return jsonResponse({ success: false, items: [], source: 'fallback', cached: false, updatedAt: new Date().toISOString(), error: 'feed_unavailable' }, 503, headers);
  }
}
