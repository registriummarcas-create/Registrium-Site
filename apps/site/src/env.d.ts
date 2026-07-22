/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SITE_ENV?: string;
  readonly PUBLIC_TALLY_FORM_URL?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_WHATSAPP_MESSAGE?: string;
  readonly PUBLIC_INSTAGRAM_URL?: string;
  readonly PUBLIC_INSTAGRAM_FEED_URL?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
