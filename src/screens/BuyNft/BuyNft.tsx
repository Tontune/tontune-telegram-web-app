import avatar1 from 'assets/img/avatars/avatar1.png';
import avatar2 from 'assets/img/avatars/avatar2.png';
import avatar3 from 'assets/img/avatars/avatar3.png';
import nft4 from 'assets/img/nfts/Nft4.png';

import NFTCard from 'components/card/NftCard';

export function BuyNft() {
  return (
    <div className="flex h-[70vh] justify-center items-center">
      <NFTCard
        title="Purple Composition"
        author="Lila Everwood"
        bidders={[avatar1, avatar2, avatar3]}
        image={nft4}
        price={3.91}
        download="#"
        extra="max-w-[370px] h-auto"
      />
    </div>
  );
}
