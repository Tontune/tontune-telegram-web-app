import { Link } from 'react-router-dom';

import Card from '@/components/cards/card';
import { artistsMock } from '@/mock/artists';

const ArtistBox = ({ name, img, link }: { name: string; img: string; link: string }) => {
  return (
    <Link to={link}>
      <Card extra="items-center justify-center flex-col w-full h-[170px] bg-cover cursor-pointer">
        <div
          className="relative flex flex-col h-full w-full justify-center items-center rounded-[20px]"
          style={{
            background: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h4 className="capitalize text-primary text-xl font-semibold dark:text-white">{name}</h4>
        </div>
      </Card>
    </Link>
  );
};

export function Artists() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">Artists</h2>

      <div className="grid h-full grid-cols-2 gap-4">
        {artistsMock.map((artist, index) => (
          <ArtistBox key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
