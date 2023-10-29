import { useState } from 'react';
import { RiLockUnlockFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Card from 'components/card/card';

import avatar1 from '/public/img/avatars/avatar1.png';
import { setIsStartListen } from 'store/slices/listen';
import { useTypedDispatch } from 'store';

export function Artist() {
  const [showPlayer, setShowPlayer] = useState(false);
  const dispatch = useTypedDispatch();

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <Card extra="items-center flex-col w-full h-full p-[16px] bg-cover">
        {/* Background and profile */}
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(img/banners/banner.png)` }}
        >
          <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <img className="h-full w-full rounded-full" src={avatar1} alt="" />
          </div>
        </div>

        {/* Name and position */}
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-navy-700 text-xl font-bold dark:text-white">Lila Everwood</h4>
          <h5 className="text-base font-normal text-gray-600">Electro-Folk</h5>
        </div>

        {/* Post followers */}
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">17</h4>
            <p className="text-sm font-normal text-gray-600">Tracks</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">900</h4>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">24</h4>
            <p className="text-sm font-normal text-gray-600">NFTs Minted</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">New Tracks</h2>

        <div className="flex gap-3 overflow-x-auto overflow-y-none py-3">
          <Card
            extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
            onClick={() => dispatch(setIsStartListen(true))}
          >
            <div
              className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
              style={{ backgroundImage: `url(img/nfts/Nft1.png)` }}
            />
          </Card>

          <Link to="/buy-nft">
            <Card extra="animate-pulse flex flex-col justify-center items-center w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer">
              <div
                className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border bg-[#000] !opacity-30"
                style={{ backgroundImage: `url(img/nfts/NFT-item.jpeg)` }}
              />
              <RiLockUnlockFill className="absolute text-inherit h-10 w-10 text-navy-700" />
            </Card>
          </Link>

          <Card
            extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
            onClick={() => setShowPlayer(!showPlayer)}
          >
            <div
              className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
              style={{ backgroundImage: `url(img/nfts/Nft4.png)` }}
            />
          </Card>

          <Link to="/buy-nft">
            <Card extra="animate-pulse flex flex-col justify-center items-center w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer">
              <div
                className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border bg-[#000] !opacity-30"
                style={{ backgroundImage: `url(img/nfts/Nft5.png)` }}
              />
              <RiLockUnlockFill className="absolute text-inherit h-10 w-10 text-navy-700" />
            </Card>
          </Link>
        </div>

        {showPlayer && (
          <div className="w-full mt-3">
            <audio className="w-full" controls>
              <source src="sound/test-track.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">Upcoming Event</h2>

        <div className="flex gap-3 overflow-x-auto py-3">
          <Card extra="items-center flex-col w-full p-1 bg-cover">
            <div className="relative flex flex-col h-full w-full justify-start p-5 gap-3">
              <div>
                <h3 className="text-navy-700 font-bold text-base dark:text-white">Date & Time:</h3>
                <p className="text-sm font-normal text-gray-700">April 20th, 2023, 7:00 PM UTC</p>
              </div>

              <div>
                <h3 className="text-navy-700 font-bold text-base dark:text-white">Venue:</h3>
                <p className="text-sm font-normal text-gray-700">Virtual Reality Space - TontuneVR</p>
              </div>

              <div>
                <h3 className="text-navy-700 font-bold text-base dark:text-white">Description:</h3>
                <p className="text-sm font-normal text-gray-700">
                  Join the celestial journey with Lila McHarmony in the "Eclipse of Melodies", a once-in-a-lifetime
                  Virtual Reality (VR) concert experience, exclusively on Tontune.
                </p>
              </div>

              <div>
                <h3 className="text-navy-700 font-bold text-base dark:text-white">Ticketing:</h3>
                <p className="text-sm font-normal text-gray-700">
                  <strong>Standard Access:</strong> 20 TON
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
