import { Link } from 'react-router-dom';

import Card from 'components/card/card';

export function Home() {
  return (
    <div className="flex h-full w-full flex-col justify-center items-center gap-6">
      <Link to="/artist">
        <Card extra="items-center justify-center flex-col w-[334px] min-w-[334px] h-[334px] bg-cover cursor-pointer">
          <div
            className="relative flex h-full w-full justify-center items-center rounded-[20px] bg-cover bg-clip-border blur-[1px]"
            style={{ backgroundImage: `url(img/backgrounds/background1.jpg)` }}
          />
          <h4 className="capitalize absolute text-navy-700 text-3xl font-bold dark:text-white">Explore New Artist</h4>
        </Card>
      </Link>

      <Card extra="items-center justify-center flex-col w-[334px] min-w-[334px] h-[334px] bg-cover cursor-pointer">
          <div
            className="relative flex h-full w-full justify-center items-center rounded-[20px] bg-cover bg-clip-border blur-[1px] brightness-75"
            style={{ backgroundImage: `url(img/backgrounds/background2.jpg)` }}
          />
          <h4 className="capitalize absolute text-navy-700 text-3xl font-bold dark:text-white">Coming Soon...</h4>
        </Card>
    </div>
  );
}
