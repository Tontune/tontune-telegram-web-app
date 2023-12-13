import { SyntheticEvent } from 'react';
import { styled } from '@stitches/react';
import { IListen } from '@/types/listen';

import CloseIcon from '../../images/close.svg?react';
import { MainControlButton } from '../main-control-button';

interface Props {
  isFullView: boolean;
  isPlay: boolean;
  isListen: boolean;
  handleOpenFullView: () => void;
  handlePlayAudio: (e: SyntheticEvent) => void;
  handleCloseAudioPlayer: (e: SyntheticEvent) => void;
  currentSong: IListen;
}

const BottomView = styled('div', {
  backgroundColor: '#F5F5F5',
  width: '100%',
  maxWidth: 768,
  position: 'fixed',
  bottom: 0,
  borderBottom: '1px solid #C4C4C4',
  zIndex: 99,
  display: 'flex',
  alignItems: 'center',
  padding: '20px 8px',
  cursor: 'pointer',
  variants: {
    isFullView: {
      true: {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 300ms',
      },
      false: {
        opacity: 1,
        transition: 'opacity 300ms',
      },
    },
  },
});

export const AudioBar = ({
  isFullView,
  isPlay,
  isListen,
  handleOpenFullView,
  handlePlayAudio,
  handleCloseAudioPlayer,
  currentSong,
}: Props) => {
  const { name, author } = currentSong;
  return isListen ? (
    <BottomView onClick={handleOpenFullView} isFullView={isFullView}>
      <MainControlButton isPlay={isPlay} handlePlayAudio={handlePlayAudio} />
      <div className="ml-5">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-sm">{author}</div>
      </div>
      <CloseIcon width={15} height={15} className="text-gray-700 ml-auto" onClick={handleCloseAudioPlayer} />
    </BottomView>
  ) : null;
};
