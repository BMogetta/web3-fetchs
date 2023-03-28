import { Alchemy, Network } from 'deps';

import { ALCHEMY_API_KEY } from 'environment';

// NFT Addresses
const COLLECTIONS = [
	/* bored_apes:  */ '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
	/* azuki:  */ '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
	/* moonbirds:  */ '0x23581767a106ae21c074b2276D25e5C3e136a68b',
	/* doodles:  */ '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
	/* mutant_ape:  */ '0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
	/* the_otherside:  */ '0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258',
	/* cool_cats:  */ '0x1A92f7381B9F03921564a437210bB9396471050C',
	/* pudgy_penguins:  */ '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
];

// Alchemy settings
const settings = {
	apiKey: ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};
const omitMetadata = false;
const alchemy = new Alchemy(settings);

async function handle_search(_item: string) {
	const nfts = await alchemy.nft.getNftsForContract(_item, {
		omitMetadata: omitMetadata,
	});
	return nfts;
}

async function get_nft_collection() {
	const promises = [];

	for await (const item of COLLECTIONS) {
		promises.push(handle_search(item));
	}
	const collections = await Promise.all(promises);
	return collections;
}

export default get_nft_collection;
