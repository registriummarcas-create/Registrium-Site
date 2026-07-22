# Runbook operacional

## Alterar WhatsApp

Atualize `PUBLIC_WHATSAPP_NUMBER` no Cloudflare Pages e publique novamente.

## Alterar formulário

Atualize `PUBLIC_TALLY_FORM_URL`. Teste envio, notificação e redirecionamento.

## Instagram indisponível

1. Confirme `/health`.
2. Consulte os logs sanitizados do Worker.
3. Verifique credencial e identificador da conta.
4. Mantenha o fallback; não remova a seção.

## Reverter publicação

Use o histórico de deploys da Cloudflare ou reverta o pull request por novo PR. Não altere `main` diretamente.

## Correção urgente

Crie `hotfix/*`, execute `pnpm check`, abra PR e faça squash merge após validação do preview.
