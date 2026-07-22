# Arquitetura

## Princípios

1. Site público separado do CRM e da base do INPI.
2. Nenhum segredo no frontend.
3. Falha do Instagram não interrompe a landing page.
4. Lead deve ser preservado antes do redirecionamento ao WhatsApp.
5. MVP sem banco de dados próprio.

## Fluxo

```text
Visitante → Astro/Cloudflare Pages → Tally → /obrigado → WhatsApp
                         ↘ Worker → cache → Instagram API
```

O site possui fallback local com nove imagens. O Worker normaliza a resposta da API e limita CORS às origens configuradas.
