import { RefObject } from 'react';

import { IListen } from '@/types/listen';

interface InternalAudioProps {
  audioRef: RefObject<HTMLAudioElement>;
  setDuration: (duration: number) => void;
  setCurrentProgress: (progress: number) => void;
  setIsPlay: (isPlay: boolean) => void;
  handleNextAudio: () => void;
  setIsListen: (isListen: boolean) => void;
  isActiveLoop: boolean;
  currentSong: IListen;
}

export const InternalAudio = ({
  audioRef,
  setDuration,
  setCurrentProgress,
  setIsPlay,
  handleNextAudio,
  setIsListen,
  currentSong,
  isActiveLoop,
}: InternalAudioProps) => {
  return (
    <audio
      ref={audioRef}
      preload="metadata"
      onDurationChange={e => setDuration(e.currentTarget.duration)}
      onTimeUpdate={e => {
        setCurrentProgress(e.currentTarget.currentTime);
      }}
      onPlaying={() => setIsPlay(true)}
      onPause={() => setIsPlay(false)}
      onEnded={handleNextAudio}
      onCanPlay={() => setIsListen(true)}
      loop={isActiveLoop}
    >
      <source type="audio/mpeg" src={currentSong.audioUrl} />
    </audio>
  );
};
