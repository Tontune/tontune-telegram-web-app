import nft3 from 'assets/img/nfts/Nft3.png';

import NFTCard from 'components/card/NftCard';

export function NftCollection() {
  return (
    <div className="flex flex-col gap-3">
      <NFTCard
        title="ETH AI Brain"
        author="Nick Wilson"
        image={nft3}
        extra="max-w-[370px]"
        readonly
      />

      <NFTCard
        title="ETH AI Brain"
        author="Nick Wilson"
        image={nft3}
        extra="max-w-[370px]"
        readonly
      />
    </div>
  );
}
