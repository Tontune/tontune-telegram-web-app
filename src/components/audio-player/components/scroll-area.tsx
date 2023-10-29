import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { styled } from '@stitches/react';

const SCROLLBAR_SIZE = 8;

export const Root = styled(ScrollAreaPrimitive.Root, {
  display: 'flex',
  flex: '1',
  width: '100%',
  overflow: 'hidden',
});

export const Viewport = styled(ScrollAreaPrimitive.Viewport, {
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
});

export const Scrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  boxSizing: 'border-box',
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,

  '&:hover': {
    '& > div': {
      background: 'rgba(186, 186, 186, 0.7)',
    },
  },

  '&[data-orientation="vertical"]': {
    width: SCROLLBAR_SIZE,
  },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const Thumb = styled(ScrollAreaPrimitive.Thumb, {
  boxSizing: 'border-box',
  flex: 1,

  background: 'rgba(186, 186, 186, 0.4)',
  transition: 'background .1s ease-out',

  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    size: '100%',
    minSize: 20,
  },
});

interface ScrollAreaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'> {
  children: ReactNode;
  className?: string;
  orientation?: 'vertical' | 'horizontal' | 'both';
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, className, orientation = 'vertical', ...props }, ref) => {
    return (
      <Root type="auto">
        <Viewport ref={ref} className={className} {...props}>
          {children}
        </Viewport>
        {orientation === 'vertical' || orientation === 'both' ? (
          <Scrollbar orientation="vertical">
            <Thumb />
          </Scrollbar>
        ) : null}
        {orientation === 'horizontal' || orientation === 'both' ? (
          <Scrollbar orientation="horizontal">
            <Thumb />
          </Scrollbar>
        ) : null}
      </Root>
    );
  },
);
