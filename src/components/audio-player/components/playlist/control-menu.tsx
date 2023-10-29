import { styled } from '@stitches/react';
import AddToQueueIcon from 'assets/images/add-to-queue.svg?react';
import PlayNextIcon from 'assets/images/play-next.svg?react';

const ControlButton = styled('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  paddingY: 10,
  display: 'flex',
  alignItems: 'center',
});

const ListenDivider = styled('div', {
  width: '100%',
  position: 'absolute',
  right: 0,

  borderWidth: 0,
  borderStyle: 'solid',
  borderTopWidth: 1.5,
  borderColor: '$grey',

  variants: {
    isContentList: {
      true: {
        width: 'calc(100% - 20px)',
      },
    },
  },
});

interface ControlMenuProps {
  handlePlayNext: (audioId: number) => void;
  handleAddToQueue: (audioId: number) => void;
  playNextId: number;
}

export const ControlMenu = ({ handlePlayNext, handleAddToQueue, playNextId }: ControlMenuProps) => {
  return (
    <div>
      <ControlButton onClick={() => handlePlayNext(playNextId)}>
        <PlayNextIcon style={{ marginRight: 10 }} />
        <p className="text-xm font-bold">Play Next</p>
      </ControlButton>
      <ListenDivider isContentList />
      <ControlButton onClick={() => handleAddToQueue(playNextId)}>
        <AddToQueueIcon style={{ marginRight: 10 }} />
        <p className="text-xm font-bold">Add to Queue</p>
      </ControlButton>
    </div>
  );
};
