import { TonClient } from 'ton';
import { Address, Sender, toNano } from 'ton-core';

import { JettonMinter } from '../../contracts/wrappers/JettonMinter';

const JETTON_MINTER_ADDRESS = ''; // jetton address

export async function mintTokens(
    client: TonClient,
    receiver: Address,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sender: any,  // use ton-connect if user, if backend provider from private key
    // https://github.com/ton-core/ton-core/blob/e0ed819/src/contract/Sender.ts#L23
    // const keys = await mnemonicToPrivateKey(mnemonic);
    //   const wallet = tonClient.open(
    //     WalletContractV3R2.create({
    //       workchain: 0,
    //       publicKey: keys.publicKey,
    //     }),
    // );
    // const sender = wallet.sender(keys.secretKey);
    //https://docs.dedust.io/recipes/interaction-with-dedust-protocol-using-wallet-contract
    amount: bigint,
  ) {
    const minter_contract = JettonMinter.createFromAddress(Address.parse(JETTON_MINTER_ADDRESS));
    const minter = client.open(minter_contract);
    await minter.sendMint(sender, receiver, amount, toNano('0.05'), toNano('0.1'));
  }



