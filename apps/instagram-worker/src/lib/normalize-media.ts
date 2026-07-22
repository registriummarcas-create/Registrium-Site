import type { InstagramApiItem, InstagramItem } from '../types/instagram';

export function normalizeMedia(item: InstagramApiItem): InstagramItem | null {
  const mediaUrl = item.media_type === 'VIDEO' ? item.thumbnail_url || item.media_url : item.media_url;
  if (!mediaUrl || !item.permalink || !item.id) return null;
  return {
    id: item.id,
    mediaType: item.media_type,
    mediaUrl,
    thumbnailUrl: item.thumbnail_url || null,
    permalink: item.permalink,
    caption: (item.caption || '').slice(0, 500),
    timestamp: item.timestamp
  };
}
