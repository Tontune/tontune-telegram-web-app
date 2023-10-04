import avatar1 from 'assets/img/avatars/avatar1.png';
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
import nft3 from 'assets/img/nfts/Nft3.png';

import NFTCard from 'components/card/NftCard';

export function NftCollection() {
  return (
    <div className="flex flex-col gap-3">
      <NFTCard
        title="ETH AI Brain"
        author="Nick Wilson"
        bidders={[avatar1, avatar2, avatar3]}
        image={nft3}
        price="0.91 ETH"
        download="#"
        extra="max-w-[370px]"
      />

      <NFTCard
        title="ETH AI Brain"
        author="Nick Wilson"
        bidders={[avatar1, avatar2, avatar3]}
        image={nft3}
        price="0.91 ETH"
        download="#"
        extra="max-w-[370px]"
      />
    </div>
  );
}
