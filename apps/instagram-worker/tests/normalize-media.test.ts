import { describe, expect, it } from 'vitest';
import { normalizeMedia } from '../src/lib/normalize-media';

describe('normalizeMedia', () => {
  it('usa thumbnail para vídeo', () => {
    const item = normalizeMedia({ id: '1', media_type: 'VIDEO', media_url: 'video.mp4', thumbnail_url: 'cover.jpg', permalink: 'https://instagram.com/p/1', caption: 'Teste', timestamp: '2026-07-22T00:00:00Z' });
    expect(item?.mediaUrl).toBe('cover.jpg');
  });
  it('descarta item sem URL', () => {
    expect(normalizeMedia({ id: '1', media_type: 'IMAGE', permalink: 'https://instagram.com/p/1', timestamp: '2026-07-22T00:00:00Z' })).toBeNull();
  });
});
