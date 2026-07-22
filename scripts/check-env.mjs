const required = process.argv.slice(2);
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Variáveis ausentes: ${missing.join(', ')}`);
  process.exit(1);
}
console.log('Variáveis obrigatórias presentes.');
