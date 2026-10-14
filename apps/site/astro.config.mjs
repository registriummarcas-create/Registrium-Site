import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Municípios fora do índice (ver scripts/gerar-noindex-municipios.mjs) também saem do sitemap.
const municipiosNoindex = JSON.parse(readFileSync(new URL('./src/data/municipios-noindex.json', import.meta.url), 'utf8'));
const paginasNoindex = new Set(municipiosNoindex.map((m) => `/registro-de-marca/${m}/`));

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://registrium.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/obrigado') && !paginasNoindex.has(new URL(page).pathname)
    })
  ],
  output: 'static',
  compressHTML: true
});
