import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://registrium.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/obrigado')
    })
  ],
  output: 'static',
  compressHTML: true
});
