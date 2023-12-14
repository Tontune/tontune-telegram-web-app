import { Button } from '@/components/ui/button.tsx';

import Card from '../../components/card/card.tsx';

import avatar1 from '/public/img/avatars/avatar1.png';

export function MyTune() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <div className="">
        <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">My Tune</h2>
        <div className="flex flex-col gap-6 ml-4 mb-4 mx-auto">
          <div className="flex flex-row gap-4 mx-auto">
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
            >
              <span className="font-bold text-2xl">30</span>
              <span className="text-gray-400">Liked</span>
            </Card>
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
            >
              <span className="font-bold text-2xl">102</span>
              <span className="text-gray-400">Heart tokens</span>
            </Card>
            <Card
              extra="items-center text-center justify-center flex-col w-[96px] min-w-[96px] h-[96px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
              onClick={() => {}}
            >
              <span className="font-bold text-2xl">5</span>
              <span className="text-gray-400">Artist Supporting</span>
            </Card>
          </div>
          <Button>Mint Tokens</Button>
        </div>

        <h2 className="mb-4 pt-4 text-navy-700 text-2xl font-bold dark:text-white">Registered events</h2>
        <div className="flex flex-col gap-4 mb-4 ml-4 mx-auto">
          <Card
            extra="items-start p-6 text-left  justify-center flex-col h-[118px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <span className="font-bold text-xl">Didactic Implementation</span>
            <span className="text-gray-400">Within itself agent center check operation much.</span>
            <span className="text-gray-400">Used 23 hearts</span>
          </Card>
          <Card
            extra="items-start p-6 text-left justify-center w-auto flex-col h-[118px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <span className="font-bold text-xl">Asynchronus Conglomeration</span>
            <span className="text-gray-400">Culture group certain.</span>
            <span className="text-gray-400">Used 31 hearts</span>
          </Card>
        </div>

        <div className="flex justify-between mb-4 pt-4">
          <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">You liked </h2>
          <button className="text-gray-800 text-lg font-bold ">View all</button>
        </div>
        <div className="flex flex-col ml-4 gap-2 mx-auto">
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
                  <span className="font-bold text-lg">Dark Realize Protect</span>
                  <span className="text-gray-400">Logan Benton</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="#82D616"
                  className="w-6 h-6 mt-1"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                <span className="text-lime-500 text-xl">12</span>
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
                  <img className="h-full w-full rounded-full" src={avatar1} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">Dark Realize Protect</span>
                  <span className="text-gray-400">Logan Benton</span>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 32"
                  stroke-width="1.5"
                  stroke="#82D616"
                  className="w-6 h-6 mt-1"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                <span className="text-lime-500 text-xl">12</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-between mb-4 pt-8">
          <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">You have supported</h2>
          <button className="text-gray-800 text-lg font-bold ">View all</button>
        </div>
        <div className="flex flex-col ml-4 gap-2 mx-auto">
          <Card
            extra="p-6 justify-center text-left w-auto h-[80px] p-1 bg-cover cursor-pointer shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none"
            onClick={() => {}}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="h-[48px] w-[48px]">
                  <img className="h-full w-full rounded-full" src={avatar1} alt="" />
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
                  <img className="h-full w-full rounded-full" src={avatar1} alt="" />
                </div>
                <span className="font-bold text-lg">Dark Realize Protect</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
