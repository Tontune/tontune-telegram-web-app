import axios from 'axios';

/* const TONAPI_URL = 'https://tonapi.io/'; */
const TONAPI_TESTNET_URL = 'https://testnet.tonapi.io'; // We're using testnet for demo purposes

const DEMO_COLLECTION_ADDRESS = import.meta.env.VITE_DEMO_COLLECTION_ADDRESS || '';
const TON_API_KEY = import.meta.env.VITE_TON_API_KEY || '';

export async function fetchItemsByAddress(userAddress: string, collectionAddress: string = DEMO_COLLECTION_ADDRESS) {
  let data;

  try {
    const response = await axios.get(TONAPI_TESTNET_URL + '/v2/accounts/' + userAddress + '/nfts', {
      params: {
        limit: 10,
        collection: collectionAddress,
      },
      headers: {
        Authorization: 'Bearer ' + TON_API_KEY,
      },
    });
    data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
