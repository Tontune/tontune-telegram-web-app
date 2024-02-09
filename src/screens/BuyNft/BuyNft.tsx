import { useTonAddress } from '@tonconnect/ui-react';
import { Address } from 'ton';

import nftItem from '@/assets/img/nfts/NFT-1.jpeg?url';
import NFTCard from '@/components/cards/nft-card';
import { mintNewNft } from '@/hooks/useNftContract';
import { useTonClient } from '@/hooks/useTonClient';
import { useTonConnect } from '@/hooks/useTonConnect';

export function BuyNft() {
  const rawAddress = useTonAddress();
  const { client } = useTonClient();
  const { sender } = useTonConnect();

  const mintNft = async () => {
    if (client) {
      mintNewNft(client!, Address.parse(rawAddress), sender!);
    } else {
      alert('Please connect your Testnet wallet first');
    }
  };

  return (
    <div className="flex h-[70vh] justify-center items-center">
      <NFTCard
        onClick={mintNft}
        title="Celestial Harmonics"
        author="Lila Everwood"
        image={nftItem}
        price={1}
        download="#"
        extra="max-w-[370px] !h-auto"
      />
    </div>
  );
}
