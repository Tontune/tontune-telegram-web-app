import { RefObject, SyntheticEvent } from 'react';
import { RiLoopLeftFill, RiShuffleFill } from 'react-icons/ri';
import { isEmpty } from 'lodash';
import { twJoin } from 'tailwind-merge';

import { useTypedSelector } from '@/store';
import { IListen } from '@/types/listen';
import { formatDuration } from '@/utils/formatDuration';

import NextIcon from '../../images/control.svg?react';
import { MainControlButton } from '../main-control-button';
import { Playlist } from '../playlist';

import { SliderRange, SliderRoot, SliderTrack } from './slider';

interface Props {
  isPlay: boolean;
  handlePlayAudio: (e: SyntheticEvent) => void;
  innerRef: RefObject<HTMLAudioElement>;
  duration: number;
  currentProgress: number;
  setCurrentProgress: (progress: number) => void;
  onNext: (audioId?: number) => void;
  onPrev: () => void;
  currentSong: IListen;
  disabledNext: boolean;
  disabledPrev: boolean;
  handleActiveControls: (e: SyntheticEvent) => void;
  isActiveLoop: boolean;
  isActiveShuffle: boolean;
  handlePlayNext: (audioId: number) => void;
  currentIdAudio: number;
  handleAddToQueue: (audioId: number) => void;
}

export const FullViewAudioBar = ({
  isPlay,
  handlePlayAudio,
  innerRef,
  duration,
  currentProgress,
  setCurrentProgress,
  onNext,
  onPrev,
  currentSong,
  disabledPrev,
  disabledNext,
  handleActiveControls,
  isActiveLoop,
  isActiveShuffle,
  handlePlayNext,
  currentIdAudio,
  handleAddToQueue,
}: Props) => {
  const playlist = useTypedSelector(state => state.listen.playlist);

  const durationValue = formatDuration(duration);
  const elapsedValue = formatDuration(currentProgress);

  const { name, author, imageUrl } = currentSong;


  return (
    <div className="flex flex-col justify-between">
      <div className="flex items-center">
        {imageUrl ? (
          <div className="w-[88px] h-[88px] flex items-center justify-center brightness-50">
            <img alt='img' src={imageUrl} className="w-full rounded-md" />
          </div>
        ) : null}
        <div className="ml-5">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm">{author}</p>
        </div>
      </div>

      {/* Radix-ui slider */}
      <SliderRoot
        aria-label="Page"
        min={0}
        max={duration}
        value={[currentProgress]}
        onValueChange={e => {
          if (!innerRef.current) return;

          innerRef.current.currentTime = e[0];

          setCurrentProgress(e[0]);
        }}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
      </SliderRoot>

      <div className="flex">
        <p className="mr-auto text-xs">{elapsedValue}</p>
        <p className="ml-auto text-xs">{durationValue}</p>
      </div>

      <div className="flex w-70% justify-between mx-auto py-[20px] items-center">
        <button onClick={onPrev} disabled={disabledPrev} className="mr-2 border-none bg-transparent cursor-pointer">
          <NextIcon />
        </button>

        <MainControlButton isPlay={isPlay} handlePlayAudio={handlePlayAudio} isFullViewBar />

        <button
          onClick={() => onNext()}
          disabled={disabledNext}
          className="ml-2 border-none bg-transparent cursor-pointer"
        >
          <NextIcon className="transform rotate-180" />
        </button>
      </div>

      <div className="w-full flex justify-between mb-5">
        <button
          name="loop"
          onClick={(e: SyntheticEvent) => handleActiveControls(e)}
          className={`border-none bg-transparent cursor-pointer ${
            isActiveLoop ? 'text-blueSecondary fill-current' : ''
          }`}
        >
          <RiLoopLeftFill className={twJoin('w-5 h-5 mr-auto', isActiveLoop && 'text-blueSecondary')} />
        </button>

        <button
          name="shuffle"
          onClick={(e: SyntheticEvent) => handleActiveControls(e)}
          className={`border-none bg-transparent cursor-pointer`}
        >
          <RiShuffleFill className={twJoin('w-5 h-5', isActiveShuffle && 'text-blueSecondary')} />
        </button>
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      {!isEmpty(playlist) ? (
        <Playlist
          handlePlayNext={handlePlayNext}
          handleAddToQueue={handleAddToQueue}
          currentIdAudio={currentIdAudio}
          onNext={onNext}
        />
      ) : null}
    </div>
  );
};
