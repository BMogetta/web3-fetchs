import { COINMARKETCAP_API_KEY } from 'environment';
const COINMARKETCAP_URL =
	'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

async function get_top_cryptocurrencies() {
	const fetch_data = await fetch(COINMARKETCAP_URL, {
		headers: {
			'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY!,
			Accept: 'application/json',
		},
	});
	const top_cryptocurrencies = await fetch_data.json();
	return top_cryptocurrencies;
}

export default get_top_cryptocurrencies;
