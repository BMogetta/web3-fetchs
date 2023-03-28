import { dotenv } from "deps";

await dotenv.load({ export: true, allowEmptyValues: true });

const COINMARKETCAP_API_KEY = Deno.env.get("COINMARKETCAP_API_KEY");
const ALCHEMY_API_KEY = Deno.env.get("ALCHEMY_API_KEY");

if (COINMARKETCAP_API_KEY || COINMARKETCAP_API_KEY)
  throw new Error("Environment variables are not define");

export { ALCHEMY_API_KEY, COINMARKETCAP_API_KEY };
