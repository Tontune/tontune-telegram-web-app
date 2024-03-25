import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Card from '@/components/cards/card';
import { Button } from '@/components/ui/button.tsx';
import { useTypedDispatch } from '@/store';
import { RootState } from '@/store/reducer';
import { decrease, increase } from '@/store/slices/balance';

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
  const dispatch = useTypedDispatch();
  const tuneBalance = useSelector((state: RootState) => state.balance.tuneCoins);

  const [isVoted, setIsVoted] = useState(localStorage.getItem('submitBattleVote') || null);

  // Mocked onClick function
  const handleClick = () => {
    if (isVoted) {
      setIsVoted(null);
      localStorage.removeItem('submitBattleVote');

      // ❗Demo❗: Deduct 15 coins to user's balance
      if (tuneBalance >= 15) {
        dispatch(decrease(15));
        toast(`⚔️ You reset the battle! -15 Tune coins deducted`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } else {
      setIsVoted('true');
      localStorage.setItem('submitBattleVote', 'true');

      // ❗Demo❗: Add 15 coins to user's balance
      dispatch(increase(15));
      toast(`⚔️ Thanks for participating in a battle! +15 Tune coins added`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
            {!isVoted ? (
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
