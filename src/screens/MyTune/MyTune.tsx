import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import avatar1 from '@/assets/img/avatars/avatar1.png?url';
import avatar2 from '@/assets/img/avatars/avatar2.png?url';
import avatar3 from '@/assets/img/avatars/avatar3.png?url';
import avatar4 from '@/assets/img/avatars/avatar4.png?url';
import BountyCard from '@/components/cards/bounty-card';
import Card from '@/components/cards/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { questsMock } from '@/mock/quests';
import { useTypedDispatch } from '@/store';
import { RootState } from '@/store/reducer';
import { decrease } from '@/store/slices/balance';

export function MyTune() {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const tuneBalance = useSelector((state: RootState) => state.balance.tuneCoins);

  // ❗Demo❗: Mint coins user's balance
  const handleMintTokens = () => {
    if (tuneBalance > 20) {
      dispatch(decrease(tuneBalance));

      toast(`🚀 You've minted TUNE tokens! Thanks for participating in Tontune demo`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      alert('You need at least 20 Tune coins to mint tokens');
    }
  };

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-medium">Daily challenges</h1>

        <div className="flex overflow-auto w-full gap-4 pb-3" style={{ scrollbarWidth: 'thin' }}>
          {questsMock.map((item, index) => (
            <BountyCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">My Tune</h2>
        <div className="flex flex-col gap-6 mb-4 mx-auto">
          <div className="flex flex-row gap-4 mx-auto">
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
            >
              <span className="font-bold text-xl">3</span>
              <span className="text-gray-400">Tracks Liked</span>
            </Card>
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
              style={{ boxShadow: '0px 2px 10px 0px rgba(168, 85, 247, 1), 0px -2px 10px 0px rgba(14, 165, 233, 0.7)' }}
            >
              <span className="font-bold text-xl">{tuneBalance.toFixed(0)}</span>
              <span className="text-gray-400">Tune Coins</span>
            </Card>
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
            >
              <span className="font-bold text-xl">5</span>
              <span className="text-gray-400">Artist Supporting</span>
            </Card>
          </div>

          <Button className="w-full" onClick={handleMintTokens}>
            Mint Tokens
          </Button>
        </div>

        <h2 className="mb-4 pt-4 text-navy-700 text-2xl font-bold dark:text-white">Registered events</h2>
        <div className="flex flex-col gap-4 mb-4 mx-auto">
          <Card
            extra="items-start p-6 text-left  justify-center flex-col h-[118px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {
              navigate('/events/1');
            }}
            style={{ boxShadow: '0px 2px 10px 0px rgba(168, 85, 247, 1), 0px -2px 10px 0px rgba(14, 165, 233, 0.7)' }}
          >
            <span className="font-bold text-xl">Lana Del Rey’s concert</span>
            <span className="text-gray-400">Lana Del Rey</span>
            <div className="mt-3 h-px w-full bg-gray-300 dark:bg-white/20" />
            <span className="text-gray-500">Purchased with $TUNE tokens</span>
            <span className="text-gray-700 font-semibold">26.04.2024</span>
          </Card>
          <Card
            extra="items-start p-6 text-left justify-center w-auto flex-col h-[118px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {
              navigate('/events/0');
            }}
          >
            <span className="font-bold text-xl">Lil uzi vert’s concert</span>
            <span className="text-gray-400">Lil uzi vert</span>
            <div className="mt-3 h-px w-full bg-gray-300 dark:bg-white/20" />
            <span className="text-gray-700 font-semibold">23.06.2024</span>
          </Card>
        </div>

        <div className="flex justify-between mb-4 pt-4">
          <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">You liked </h2>
        </div>
        <div className="flex flex-col gap-2 mx-auto">
          <Card
            extra="p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="h-[48px] w-[48px]">
                  <img className="h-full w-full rounded-full" src={avatar1} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Dark Realize Sound</span>
                  <span className="text-gray-400">Logan Benton</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  strokeWidth="1.5"
                  stroke="#82D616"
                  className="w-6 h-6 mt-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                <span className="text-lime-500 text-xl">3</span>
              </div>
            </div>
          </Card>
          <Card
            extra="p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="h-[48px] w-[48px]">
                  <img className="h-full w-full rounded-full" src={avatar2} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Light Realize Protect</span>
                  <span className="text-gray-400">Logan Benton</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  strokeWidth="1.5"
                  stroke="#82D616"
                  className="w-6 h-6 mt-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                <span className="text-lime-500 text-xl">12</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-between mb-4 pt-8">
          <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">You have supported</h2>
        </div>
        <div className="flex flex-col gap-2 mx-auto">
          <Card
            extra="p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="h-[48px] w-[48px]">
                  <img className="h-full w-full rounded-full" src={avatar3} alt="" />
                </div>
                <span className="font-bold text-lg">Dark Realize Protect</span>
              </div>
            </div>
          </Card>
          <Card
            extra="p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="h-[48px] w-[48px]">
                  <img className="h-full w-full rounded-full" src={avatar4} alt="" />
                </div>
                <span className="font-bold text-lg">Light Music</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
