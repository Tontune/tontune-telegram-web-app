import { SyntheticEvent } from 'react';
import { twJoin } from 'tailwind-merge';

import PauseIcon from '../images/pause.svg?react';
import PlayIcon from '../images/play.svg?react';

export const MainControlButton = ({
  isPlay,
  handlePlayAudio,
  isFullViewBar,
}: {
  isPlay: boolean;
  isFullViewBar?: boolean;
  handlePlayAudio: (e: SyntheticEvent) => void;
}) => {
  return (
    <button
      className={twJoin(
        'w-5 h-5 border-none bg-none cursor-pointer flex items-center justify-center',
        isFullViewBar && '!w-[58px] !h-[58px] bg-white rounded-[50px]',
      )}
      onClick={handlePlayAudio}
      type="button"
    >
      {!isPlay ? (
        <PlayIcon
          className="text-gray-900"
          width={isFullViewBar ? 25 : 20}
          height={isFullViewBar ? 25 : 20}
          viewBox={isFullViewBar ? '0 0 14 23' : '0 0 18 23'}
        />
      ) : (
        <PauseIcon width={isFullViewBar ? 30 : 20} height={isFullViewBar ? 30 : 20} />
      )}
    </button>
  );
};
