import get_top_cryptocurrencies from "./src/api/top_cryptocurrencies.ts";

async function main() {
  console.log("Initializing script");
  const currencies = await get_top_cryptocurrencies();
  if (!currencies) throw new Error("Failed to fetch top crypto currencies");
  Deno.writeTextFileSync("data/top_crypto.json", JSON.stringify(currencies), {
    create: true,
  });
}

await main();
