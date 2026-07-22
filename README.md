# Registrium Site

Landing page institucional e comercial da Registrium, construída para convencer, capturar e encaminhar leads sem banco de dados próprio no MVP.

## Arquitetura

- `apps/site`: site estático Astro + TypeScript.
- `apps/instagram-worker`: Cloudflare Worker que protege o token e entrega o feed do Instagram.
- `docs`: arquitetura, implantação, operação e decisões técnicas.

## Requisitos

- Node.js 22+
- Corepack habilitado
- pnpm 11.15.1

## Instalação

```bash
corepack enable
corepack prepare pnpm@11.15.1 --activate
pnpm install
```

## Desenvolvimento

```bash
pnpm dev
pnpm dev:worker
```

O site abre, por padrão, em `http://localhost:4321`. O Worker abre no endereço informado pelo Wrangler.

## Validação

```bash
pnpm check
```

## Variáveis

Copie os arquivos de exemplo sem remover os originais:

```bash
cp apps/site/.env.example apps/site/.env
cp apps/instagram-worker/.dev.vars.example apps/instagram-worker/.dev.vars
```

Nunca versione `.env`, `.dev.vars` ou tokens.

## Deploy

### Cloudflare Pages

- Diretório raiz: `apps/site`
- Comando: `pnpm build`
- Saída: `dist`
- Branch de produção: `main`

### Cloudflare Worker

- Diretório raiz: `apps/instagram-worker`
- Comando: `pnpm deploy`

Consulte `docs/CLOUDFLARE-DEPLOY.md` antes da primeira publicação.
