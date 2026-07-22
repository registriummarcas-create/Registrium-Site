const urls = [
  process.env.SITE_URL,
  process.env.INSTAGRAM_URL,
  process.env.TALLY_FORM_URL,
  process.env.WHATSAPP_URL,
  process.env.INSTAGRAM_FEED_URL
].filter(Boolean);

if (urls.length === 0) {
  console.log('Nenhuma URL configurada. Defina variáveis no workflow após o primeiro deploy.');
  process.exit(0);
}

let failed = false;
for (const url of urls) {
  try {
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000) });
    if (!response.ok && response.status !== 405) {
      throw new Error(`HTTP ${response.status}`);
    }
    console.log(`OK ${url}`);
  } catch (error) {
    failed = true;
    console.error(`FALHA ${url}: ${error.message}`);
  }
}

if (failed) process.exit(1);
