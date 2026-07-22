# Segurança

## Regras obrigatórias

- Tokens da Meta ficam exclusivamente nos Secrets da Cloudflare.
- Dados de leads não podem ser gravados no GitHub ou nos logs do Worker.
- `.env` e `.dev.vars` nunca devem ser versionados.
- Erros públicos não podem revelar credenciais, respostas integrais da API ou dados pessoais.
- Alterações em CORS, analytics, formulário ou conteúdo legal exigem revisão específica.

## Comunicação de falhas

Não abra issue pública com credenciais ou dados pessoais. Registre apenas descrição sanitizada do problema e trate segredos comprometidos como imediatamente revogados.
