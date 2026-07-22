import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'apps/site/src/pages/index.astro',
  'apps/site/src/pages/obrigado.astro',
  'apps/site/src/pages/politica-de-privacidade.astro',
  'apps/site/src/pages/termos-de-uso.astro',
  'apps/instagram-worker/src/index.ts',
  'SECURITY.md'
];

for (const file of requiredFiles) {
  await access(file);
}

const gitignore = await readFile('.gitignore', 'utf8');
for (const entry of ['.env', '.dev.vars', 'node_modules/', 'dist/']) {
  if (!gitignore.includes(entry)) {
    throw new Error(`.gitignore sem entrada obrigatória: ${entry}`);
  }
}

console.log(`Validação estrutural concluída: ${requiredFiles.length} arquivos críticos encontrados.`);
