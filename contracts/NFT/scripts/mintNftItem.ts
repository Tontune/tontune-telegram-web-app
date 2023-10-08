import { Address, toNano } from 'ton-core';
import { TuneNft } from '../wrappers/TuneNft';
import { NetworkProvider, sleep } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Collection address'));

    const nftCollection = provider.open(TuneNft.createFromAddress(address));

        await nftCollection.sendMintNft(provider.sender(), {
            value: toNano('0.05'),
            amount: toNano('0.025'),
            itemIndex: 0,
            itemOwnerAddress: provider.sender().address as Address,
            itemContent: 'https://raw.githubusercontent.com/Cosmodude/TonTune/main/itemMetadata.json',
            queryId: Date.now()
        });

    ui.write('Nft item deployed successfully!');
}

