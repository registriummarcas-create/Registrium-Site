# Instagram

O Worker usa URL-base configurável para evitar acoplamento rígido a uma modalidade ou versão da API.

Variáveis:

- `INSTAGRAM_ACCESS_TOKEN`: secret.
- `INSTAGRAM_API_BASE_URL`: URL-base compatível com a integração configurada na Meta.
- `INSTAGRAM_USER_ID`: identificador da conta profissional.
- `ALLOWED_ORIGINS`: origens separadas por vírgula.
- `CACHE_TTL_SECONDS`: entre 300 e 10800 segundos.
- `MAX_POSTS`: entre 1 e 25; a interface usa os nove primeiros.

Após configurar, valide `/health` e `/feed` antes de informar a URL no site.
