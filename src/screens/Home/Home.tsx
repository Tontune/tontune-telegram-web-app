import { Link } from 'react-router-dom';

import Card from '@/components/card/card';

const HomePages = [
  { title: 'Leaderboard', icon: '🏆', link: '/leaderboard' },
  { title: 'Artist', icon: '🎙️', link: '/artist' },
  { title: 'My Tune', icon: '💎', link: '/my-tune' },
  { title: 'Battles', icon: '⚔️', link: '/battles' },
  { title: 'Bounties', icon: '🌟', link: '/bounties' },
  { title: 'Staking', icon: '📈', link: '/staking' },
];

const HomeBox = ({ title, icon, link }: { title: string; icon: string; link: string }) => {
  return (
    <Link to={link}>
      <Card extra="items-center justify-center flex-col w-full h-[170px] bg-cover cursor-pointer">
        <div
          className="relative flex flex-col h-full w-full justify-center items-center rounded-[20px] bg-cover bg-clip-border gap-3"
          style={{ background: 'linear-gradient(178.09deg, #0EA5E9 -6.26%, #A855F7 94.28%)' }}
        >
          <div className="flex justify-center items-center rounded-full bg-white w-[56px] h-[56px] text-2xl">
            {icon}
          </div>
          <h4 className="capitalize text-primary text-xl font-bold dark:text-white">{title}</h4>
        </div>
      </Card>
    </Link>
  );
};

export function Home() {
  return (
    <div className="flex justify-center">
      <div className="grid h-full w-[375px] grid-cols-2 gap-4">
        {HomePages.map((item, index) => (
          <HomeBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
