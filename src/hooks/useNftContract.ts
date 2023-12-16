import { TonClient } from 'ton';
import { Address, toNano } from 'ton-core';

import { TuneNft } from '../../contracts/NFT/wrappers/TuneNft';

const DEMO_COLLECTION_ADDRESS = import.meta.env.VITE_DEMO_COLLECTION_ADDRESS || '';

// export async function deployCollection(
//     client: TonClient,
//     address: string,
//     sender: any,
//     metadata: string = 'https://raw.githubusercontent.com/Cosmodude/TonTune/main/collectionMetadata.json',
// ) {
//     const newCollection = TuneNft.createFromConfig(
//         {
//             ownerAddress: Address.parse(address),
//             nextItemIndex: 0,
//             collectionContent: buildCollectionContentCell({
//                 collectionContent: metadata,
//                 commonContent: ' ',
//             }),
//             nftItemCode: Cell.fromBoc(
//                 Buffer.from(ITEM_CONTRACT_CODE, 'hex'),
//             )[0],
//             royaltyParams: {
//                 royaltyFactor: Math.floor(Math.random() * 100),
//                 royaltyBase: 100,
//                 royaltyAddress: Address.parse(address),
//             },
//         },
//         Cell.fromBoc(Buffer.from(COLLECTION_CONTRACT_CODE, 'hex'))[0],
//     );

//     const collection = client.open(newCollection);
//     await collection.sendDeploy(sender, toNano('0.04'));

//     return newCollection.address.toString();
// }

export async function mintNewNft(
  client: TonClient,
  minter: Address,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sender: any,
  metadata: string = 'https://raw.githubusercontent.com/Cosmodude/TonTune/main/itemMetadata.json',
) {
  const contract = TuneNft.createFromAddress(Address.parse(DEMO_COLLECTION_ADDRESS));
  const collection = client.open(contract);

  await collection.sendMintNft(sender, {
    value: toNano('1'),
    amount: toNano('0.025'),
    itemIndex: 0,
    itemOwnerAddress: minter, // usually addresss of sender
    itemContent: metadata,
    queryId: Date.now(),
  });
}
