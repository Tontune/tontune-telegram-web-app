import { FC, useCallback } from 'react';
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from '@heroicons/react/24/outline';

import Card from '@/components/cards/card.tsx';

const gradientColors = [
  'linear-gradient(180deg, #0EA5E9 0%, #A855F7 96.24%)',
  'linear-gradient(180deg, rgba(14, 165, 233, 0.8) 0%, rgba(168, 85, 247, 0.8) 104.71%)',
  'linear-gradient(168.94deg, rgba(14, 165, 233, 0.65) -10.77%, rgba(168, 85, 247, 0.65) 106.09%)',
];

type Leader = {
  name: string;
  delta: number;
};

interface LeaderboardProps {
  leaders: Leader[];
}

export const Leaderboard: FC<LeaderboardProps> = props => {
  const { leaders } = props;

  const getDeltaInfo = useCallback((delta: number) => {
    const deltaInfoMap: Record<number, { color: string; icon: JSX.Element }> = {
      0: {
        color: 'var(--tg-theme-grey-color)',
        icon: <MinusIcon className="w-6 h-6 text-[color:var(--tg-theme-grey-color)]" />,
      },
      1: {
        color: 'var(--tg-theme-green-color)',
        icon: <ArrowUpIcon className="w-6 h-6 text-[color:var(--tg-theme-green-color)]" />,
      },
      '-1': {
        color: 'var(--tg-theme-red-color)',
        icon: <ArrowDownIcon className="w-6 h-6 text-[color:var(--tg-theme-red-color)]" />,
      },
    };

    const { color, icon } = deltaInfoMap[Math.sign(delta)] || deltaInfoMap[0];

    return (
      <div className={`flex items-center gap-1 text-[color:${color}]`}>
        {icon}
        <span className="text-black text-xl font-extrabold">{Math.abs(delta)}</span>
      </div>
    );
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <h1 className="text-center text-navy-700 text-2xl font-bold dark:text-white">Community Leaderboard 🏆</h1>
      <div className="flex flex-col gap-2">
        {leaders.map((leader, index) => (
          <Card
            key={index}
            extra={`p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none`}
            onClick={() => {}}
            style={{ background: index < 3 ? gradientColors[index] : '' }}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <div>
                  <span className="text-black h-[48px] w-[48px] text-2xl font-bold">{index + 1}</span>
                </div>
                <div className="flex flex-col text-black">
                  <span className="font-bold text-lg">{leader.name}</span>
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
