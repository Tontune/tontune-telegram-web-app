import { useTonAddress } from '@tonconnect/ui-react';
import nftItem from 'assets/img/nfts/NFT-item.jpeg';
import { mintNewNft } from 'hooks/useNftContract';
import { useTonClient } from 'hooks/useTonClient';
import { Address } from 'ton';

import NFTCard from 'components/card/NftCard';

export function BuyNft() {
  const rawAddress = useTonAddress();
  const { client } = useTonClient();

  const mintNft = async () => {
    const r = await mintNewNft(client!, Address.parse(rawAddress), Address.parse(rawAddress));
    console.log('mintNft', r);
  };

  return (
    <div className="flex h-[70vh] justify-center items-center">
      <NFTCard
        onClick={mintNft}
        title="Celestial Harmonics"
        author="Lila Everwood"
        image={nftItem}
        price={3.91}
        download="#"
        extra="max-w-[370px] !h-auto"
      />
    </div>
  );
}
