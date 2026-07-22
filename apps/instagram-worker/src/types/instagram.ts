export type MediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export interface InstagramApiItem {
  id: string;
  media_type: MediaType;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export interface InstagramApiResponse {
  data?: InstagramApiItem[];
  error?: { message?: string; type?: string; code?: number };
}

export interface InstagramItem {
  id: string;
  mediaType: MediaType;
  mediaUrl: string;
  thumbnailUrl: string | null;
  permalink: string;
  caption: string;
  timestamp: string;
}
