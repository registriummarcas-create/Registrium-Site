# Decisões técnicas

## ADR-001 — Astro estático

Escolhido por desempenho, simplicidade e ausência de necessidade de runtime no site.

## ADR-002 — Worker separado

O token do Instagram não pode ser exposto no navegador. O Worker controla CORS, timeout, cache e normalização.

## ADR-003 — Sem Supabase no MVP

O Tally preserva as respostas. Banco próprio, CRM e área administrativa permanecem fora do escopo inicial.

## ADR-004 — Sem branch develop

O fluxo usa branches curtas, pull requests, CI e squash merge na `main`.
