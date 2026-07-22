# Deploy na Cloudflare

## Pages

- Repositório: `registriumsite`
- Branch: `main`
- Diretório raiz: `apps/site`
- Comando de build: `pnpm build`
- Diretório de saída: `dist`
- Versão do Node: `22`

Configure as variáveis `PUBLIC_*` no ambiente de preview e produção.

## Worker

No diretório `apps/instagram-worker`:

```bash
pnpm wrangler login
pnpm wrangler secret put INSTAGRAM_ACCESS_TOKEN
pnpm deploy
```

Preencha `INSTAGRAM_USER_ID`, `ALLOWED_ORIGINS` e os demais valores no painel ou em `wrangler.jsonc`, sem inserir token.
