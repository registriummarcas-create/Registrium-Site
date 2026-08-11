// Gera public/images/og-cover.png (1200x630) a partir das cores/marca reais do site.
// Uso: node scripts/generate-og-image.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// sharp é dependência transitiva do Astro nesse monorepo (pnpm) — resolve pelo caminho real.
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  const { execSync } = await import('node:child_process');
  const pnpmDir = path.join(root, '..', '..', 'node_modules', '.pnpm');
  const entries = execSync(`ls "${pnpmDir}"`).toString().split('\n');
  const astroDir = entries.find((e) => e.startsWith('astro@'));
  const sharpPath = path.join(pnpmDir, astroDir, 'node_modules', 'sharp', 'dist', 'index.cjs');
  sharp = (await import(`file://${sharpPath.replace(/\\/g, '/')}`)).default;
}

const wordmarkPath = path.join(root, 'public/images/logo-wordmark-white.png');
const wordmarkBase64 = readFileSync(wordmarkPath).toString('base64');

const W = 1200;
const H = 630;
// Wordmark original 1000x224 — escala mantendo proporção.
const wmW = 300;
const wmH = Math.round(wmW * (224 / 1000));

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080a24"/>
      <stop offset="55%" stop-color="#1a1250"/>
      <stop offset="100%" stop-color="#361a5a"/>
    </linearGradient>
    <radialGradient id="glowBlue" cx="85%" cy="12%" r="60%">
      <stop offset="0%" stop-color="#3e6fe6" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#3e6fe6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowPurple" cx="6%" cy="100%" r="65%">
      <stop offset="0%" stop-color="#8a57ce" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#8a57ce" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5fc8f3"/>
      <stop offset="100%" stop-color="#b9a6f0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glowBlue)"/>
  <rect width="${W}" height="${H}" fill="url(#glowPurple)"/>

  <image x="80" y="72" width="${wmW}" height="${wmH}" href="data:image/png;base64,${wordmarkBase64}"/>

  <text x="80" y="288" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="#ffffff">Sua marca é o seu patrimônio.</text>
  <text x="80" y="356" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" fill="url(#accent)">Registre antes que alguém registre.</text>

  <text x="80" y="428" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#c7c2e4">Pesquisa de viabilidade · Protocolo em até 48h · Acompanhamento diário no INPI</text>

  <rect x="78" y="522" width="46" height="4" rx="2" fill="url(#accent)"/>
  <text x="80" y="566" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#ffffff">registrium.com.br</text>
  <text x="80" y="600" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#9c97be">Registro de marca no INPI</text>
</svg>
`;

const outPath = path.join(root, 'public/images/og-cover.png');
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
console.log('OG image gerada em', outPath);
