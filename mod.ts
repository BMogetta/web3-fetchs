import get_top_cryptocurrencies from "./src/api/top_cryptocurrencies.ts";

async function main() {
  const currencies = await get_top_cryptocurrencies();
  Deno.writeTextFileSync("data/top_crypto.json", JSON.stringify(currencies), {
    create: true,
  });
}

await main();

export { main };
