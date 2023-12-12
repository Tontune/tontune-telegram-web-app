import { FC } from 'react';
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from '@heroicons/react/24/outline';

import Card from '../../components/card/card.tsx';

type Leader = {
  name: string;
  delta: number;
};

interface LeaderboardProps {
  leaders: Leader[];
}

export const Leaderboard: FC<LeaderboardProps> = ({ leaders }) => {
  const getDeltaInfo = (delta: number) => {
    const deltaInfoMap: Record<number, { color: string; icon: JSX.Element }> = {
      0: { color: 'var(--tg-theme-grey-color)', icon: <MinusIcon className='w-6 h-6 text-[color:var(--tg-theme-grey-color)]' /> },
      1: { color: 'var(--tg-theme-green-color)', icon: <ArrowUpIcon className='w-6 h-6 text-[color:var(--tg-theme-green-color)]' /> },
      '-1': { color: 'var(--tg-theme-red-color)', icon: <ArrowDownIcon className='w-6 h-6 text-[color:var(--tg-theme-red-color)]' /> },
    };

    const { color, icon } = deltaInfoMap[Math.sign(delta)] || deltaInfoMap[0];

    return (
      <div className={`flex items-center gap-1 text-[color:${color}]`}>
        {icon}
        <span className='text-xl font-extrabold'>{Math.abs(delta)}</span>
      </div>
    );
  };

  const gradientColors = ['#fff7da', '#e3e3e3', '#ffe5ce'];

  return (
    <div className='flex h-full w-full flex-col gap-6'>
      <h1 className='mb-2 text-center text-navy-700 text-2xl font-bold dark:text-white'>Leaderboard</h1>
      <div className='flex flex-col gap-2'>
        {leaders.map((leader, index) => (
          <Card
            key={index}
            extra={`p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none`}
            onClick={() => {}}
            style={{ background: index < 3 ? `linear-gradient(to right, ${gradientColors[index]}, white)` : ''}}
          >
            <div className='flex justify-between items-center'>
              <div className='flex gap-6 items-center'>
                <div>
                  <span className='h-[48px] w-[48px] text-2xl font-bold'>{index + 1}</span>
                </div>
                <div className='flex flex-col'>
                  <span className='font-bold text-lg'>{leader.name}</span>
                  <span className='text-gray-400'>Increase Project Nice</span>
                </div>
              </div>
              {getDeltaInfo(leader.delta)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

