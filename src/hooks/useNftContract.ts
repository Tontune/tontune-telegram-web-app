import { TonClient } from 'ton';
import { Address, Cell, toNano } from 'ton-core';

import { buildCollectionContentCell } from '../../contracts/NFT/scripts/contentUtils/off-chain';
import { TuneNft } from '../../contracts/NFT/wrappers/TuneNft';

const ITEM_CONTRACT_CODE = '';
const COLLECTION_CONTRACT_CODE = '';
const COLLECTION_ADDRESS = 'EQBnPvDkl3FN-KboHpFrRDq8LiXRCkFKj-FmKwtQw0GdCCa-';
// export async function deployContract(
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
  sender: any,
  metadata: string = 'https://raw.githubusercontent.com/Cosmodude/TonTune/main/itemMetadata.json',
) {
  const contract = TuneNft.createFromAddress(Address.parse(COLLECTION_ADDRESS));
  const collection = client.open(contract);

  await collection.sendMintNft(sender, {
    value: toNano('0.1'),
    amount: toNano('0.025'),
    itemIndex: 0,
    itemOwnerAddress: minter, // usually addresss of sender
    itemContent: metadata,
    queryId: Date.now(),
  });
}
