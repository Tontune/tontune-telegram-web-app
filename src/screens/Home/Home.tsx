import { Link } from 'react-router-dom';

import BountyCard from '@/components/cards/bounty-card';
import Card from '@/components/cards/card';
import { questsMock } from '@/mock/quests';

const HomePages = [
  { title: 'Artists', icon: '🎙️', link: '/artists' },
  { title: 'My Tune', icon: '💎', link: '/my-tune' },
  { title: 'Battles', icon: '⚔️', link: '/battles' },
  { title: 'Events', icon: '🎟️', link: '/events' },
  { title: 'Leaderboard', icon: '🏆', link: '/leaderboard' },
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
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-medium">Daily challenges</h1>

        <div className="flex overflow-auto w-full gap-4 pb-3" style={{ scrollbarWidth: 'thin' }}>
          {questsMock.map((item, index) => (
            <BountyCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="grid h-full grid-cols-2 gap-4">
        {HomePages.map((item, index) => (
          <HomeBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
