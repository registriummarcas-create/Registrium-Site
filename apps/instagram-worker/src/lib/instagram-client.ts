import type { Env } from '../types/env';
import type { InstagramApiResponse, InstagramItem } from '../types/instagram';
import { normalizeMedia } from './normalize-media';

export async function fetchInstagramFeed(env: Env): Promise<InstagramItem[]> {
  if (!env.INSTAGRAM_ACCESS_TOKEN || !env.INSTAGRAM_USER_ID) {
    throw new Error('Instagram não configurado');
  }

  const base = env.INSTAGRAM_API_BASE_URL.replace(/\/$/, '');
  const fields = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp';
  const limit = Math.min(Math.max(Number(env.MAX_POSTS) || 9, 1), 25);
  const url = new URL(`${base}/${encodeURIComponent(env.INSTAGRAM_USER_ID)}/media`);
  url.searchParams.set('fields', fields);
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('access_token', env.INSTAGRAM_ACCESS_TOKEN);

  const timeout = Math.min(Math.max(Number(env.REQUEST_TIMEOUT_MS) || 8000, 1000), 15000);
  const response = await fetch(url, { signal: AbortSignal.timeout(timeout) });
  const data = (await response.json()) as InstagramApiResponse;

  if (!response.ok || data.error) {
    throw new Error(`Instagram API indisponível (${response.status})`);
  }

  return (data.data || []).map(normalizeMedia).filter((item): item is InstagramItem => item !== null).slice(0, limit);
}
