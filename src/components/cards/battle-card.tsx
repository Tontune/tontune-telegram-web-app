import { useState } from 'react';

import Card from '@/components/cards/card';
import { Button } from '@/components/ui/button.tsx';

const BattleCard = (props: {
  imageLeft: string;
  imageRight: string;
  title: string;
  buttonLeft: string;
  buttonRight: string;
  extra?: string;
  onClick?: () => void;
}) => {
  const { title, buttonLeft, buttonRight, imageLeft, imageRight, extra } = props;

  const [isVoted, setIsVoted] = useState(() => localStorage.getItem('submitBattleVote'));

  // Mocked onClick function
  const handleClick = () => {
    if (isVoted) {
      setIsVoted(null);
      localStorage.removeItem('submitBattleVote');

      window.alert('Thanks, your vote has been submitted!🎙️');
    } else {
      setIsVoted('true');
      localStorage.setItem('submitBattleVote', 'true');
    }
  };

  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}>
      <div className="h-full w-full">
        <div className="relative w-full h-full grid grid-cols-2 gap-3 mb-2">
          <img src={imageLeft} className="h-full w-full rounded-xl" alt="" />
          <img src={imageRight} className="h-full w-full rounded-xl" alt="" />
        </div>

        <p className="text-base text-[#9CA3AF]">#TON</p>

        <div className="flex flex-col mt-2.5">
          <h1 className="text-xl font-semibold mb-4">{title}</h1>

          <div className="flex w-full items-center justify-between gap-2">
            {isVoted ? (
              <>
                <Button variant="secondary" className="grow" onClick={handleClick}>
                  {buttonLeft}
                </Button>
                <Button variant="default" className="grow" onClick={handleClick}>
                  {buttonRight}
                </Button>
              </>
            ) : (
              <Button variant="outline" className="grow" onClick={handleClick}>
                Reset Vote
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BattleCard;
