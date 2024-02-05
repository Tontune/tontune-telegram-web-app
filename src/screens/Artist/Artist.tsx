import { useEffect, useState } from 'react';
import { RiLockUnlockFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useTonAddress } from '@tonconnect/ui-react';

import NFT2 from '@/assets/img/nfts/NFT-2.jpg?url';
import NFT3 from '@/assets/img/nfts/NFT-3.jpg?url';
import NFT4 from '@/assets/img/nfts/NFT-4.jpg?url';
import Card from '@/components/cards/card';
import Loader from '@/components/loader/loader';
import { Button } from '@/components/ui/button';
import { fetchItemsByAddress } from '@/hooks/TON_API.ts';
import { useTypedDispatch } from '@/store';
import { setAudioIndex, setIsStartListen, setPlaylist } from '@/store/slices/listen.ts';
import { IArtist } from '@/types/artist.ts';
import generatePlaylist from '@/utils/generatePlaylist.ts';

export function Artist({ artistInfo }: { artistInfo: IArtist }) {
  const rawAddress = useTonAddress();

  const [isLoading, setIsLoading] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const [isFollowed, setIsFollowed] = useState(() => sessionStorage.getItem('followArtist'));

  const dispatch = useTypedDispatch();

  useEffect(() => {
    // If wallet is connected, check if user has any NFTs from the artist's collection
    async function checkCollection() {
      setIsLoading(true);

      if (rawAddress) {
        const res = await fetchItemsByAddress(rawAddress);

        if (res.nft_items.length > 0) {
          setIsMinted(true);
        } else {
          setIsMinted(false);
        }
      } else {
        console.warn("Please connect to wallet, to check if user has any NFTs from the artist's collection");
      }

      dispatch(setPlaylist(generatePlaylist(isMinted)));
      setIsLoading(false);
    }

    checkCollection();
  }, [rawAddress, dispatch, isMinted]);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      <Card extra="items-center flex-col w-full h-full p-[16px] bg-cover">
        {/* Background and profile */}
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(${artistInfo?.banner})` }}
        >
          <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <img
              className="h-full w-full rounded-full"
              style={{ backgroundSize: '', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              src={artistInfo?.img}
              alt="Artist's Profile Image"
            />
          </div>
        </div>

        {/* Name and genre */}
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-navy-700 text-xl font-bold dark:text-white">{artistInfo?.name}</h4>
          <h5 className="text-base font-normal text-gray-600">{artistInfo?.genre}</h5>
        </div>

        {/* Follow */}
        <div className="mt-4 flex">
          <Button
            variant={isFollowed ? 'secondary' : 'default'}
            className="w-[125px]"
            onClick={() => {
              if (isFollowed) {
                setIsFollowed(null);
                sessionStorage.removeItem('followArtist');
              } else {
                setIsFollowed('true');
                sessionStorage.setItem('followArtist', 'true');
              }
            }}
          >
            {isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
        </div>

        {/* Post followers */}
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">3</h4>
            <p className="text-sm font-normal text-gray-600">Tracks</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">{artistInfo?.followers}</h4>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-navy-700 text-2xl font-bold dark:text-white">{artistInfo?.NFTMinted}</h4>
            <p className="text-sm font-normal text-gray-600">NFTs Minted</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">Music</h2>

        <div className="flex gap-3 overflow-x-auto overflow-y-none py-3">
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              <Card
                extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                onClick={() => {
                  dispatch(setAudioIndex(0));
                  dispatch(setIsStartListen(true));
                }}
              >
                <div
                  className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                  style={{
                    backgroundImage: `url(${NFT2})`,
                  }}
                />
              </Card>

              <Card
                extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                onClick={() => {
                  dispatch(setAudioIndex(1));
                  dispatch(setIsStartListen(true));
                }}
              >
                <div
                  className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                  style={{ backgroundImage: `url(${NFT4})` }}
                />
              </Card>

              {isMinted ? (
                <Card
                  extra="items-center flex-col w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer"
                  onClick={() => {
                    dispatch(setAudioIndex(2));
                    dispatch(setIsStartListen(true));
                  }}
                >
                  <div
                    className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border"
                    style={{
                      backgroundImage: `url(${NFT3})`,
                    }}
                  />
                </Card>
              ) : (
                <Link to="/buy-nft">
                  <Card extra="animate-pulse flex flex-col justify-center items-center w-[118px] min-w-[118px] h-[118px] p-1 bg-cover cursor-pointer">
                    <div
                      className="relative flex h-full w-full justify-center items-center rounded-[16px] bg-cover bg-clip-border bg-[#000] !opacity-30"
                      style={{ backgroundImage: `url(${NFT3})` }}
                    />
                    <RiLockUnlockFill className="absolute text-inherit h-10 w-10 text-navy-700" />
                  </Card>
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="flex flex-col">
        <h2 className="mb-1 text-navy-700 text-2xl font-bold dark:text-white">Upcoming Event</h2>

        <div className="flex gap-3 overflow-x-auto py-3">
          <Card extra="items-center flex-col w-full p-1 bg-cover">
            <div className="relative flex flex-col h-full w-full justify-start p-5 gap-3">
              <div>
                <h3 className="text-navy-700 font-bold text-base dark:text-white">Date & Time:</h3>
                <p className="text-sm font-normal text-gray-700">April 20th, 2024, 7:00 PM UTC</p>
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
