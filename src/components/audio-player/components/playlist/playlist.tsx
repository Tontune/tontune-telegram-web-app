import { twJoin } from 'tailwind-merge';

import { useTypedSelector } from '@/store';

import PauseIcon from '../../images/pause.svg?react';

export const Playlist = ({
  /* handlePlayNext,
  handleAddToQueue, */
  currentIdAudio,
  onNext,
}: {
  handlePlayNext: (audioId: number) => void;
  currentIdAudio: number;
  handleAddToQueue: (audioId: number) => void;
  onNext: (audioId?: number) => void;
}) => {
  const playlist = useTypedSelector(state => state.listen.playlist);

  return (
    <div className="mt-3 h-[140px] overflow-scroll pt-4">
      <div className="flex flex-col gap-3">
        {playlist.map(({ name, /* author, audioUrl, id, */ duration, imageUrl }, index) => (
          <div className="flex cursor-pointer" key={index} onClick={() => onNext(index)}>
            <div
              className={twJoin(
                'w-[44px] h-[44px] flex items-center justify-center brightness-50',
                currentIdAudio === index && 'flex items-center justify-center brightness-70',
              )}
            >
              {imageUrl ? <img alt='img' src={imageUrl} className="rounded-md -z-10" /> : null}
              {currentIdAudio === index ? <PauseIcon className="absolute my-0 mx-auto text-gray-900" /> : null}
            </div>
            <div className="ml-2.5">
              <p className="text-sm font-bold">{name}</p>
              <p className="text-xs font-normal">{duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
