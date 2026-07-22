export interface InstagramItem {
  id: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  thumbnailUrl: string | null;
  permalink: string;
  caption: string;
  timestamp: string;
}

export interface InstagramFeed {
  success: boolean;
  items: InstagramItem[];
  source: 'instagram' | 'fallback';
  cached: boolean;
  updatedAt: string;
}
