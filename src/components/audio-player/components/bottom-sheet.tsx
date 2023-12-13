import { ReactNode, useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import composeRefs from '@seznam/compose-react-refs';
import { keyframes, styled } from '@stitches/react';

import { useGetLatest } from '@/hooks/utils/useGetLatest';

import ChevronDown from '../images/chevron-down.svg?react';

import { ScrollArea } from './scroll-area';

interface BottomSheetProps {
  children: ReactNode;
  swipeable?: boolean;
  overlay?: 'dark' | 'light';
  close(): void;
  isFullScreen?: boolean;
  title?: string;
  background?: 'dark' | 'light';
  width?: 'appWidth' | 'fullWidth';
}

const animationDurationSec = 0.25;

const ScreenContent = styled('div', {
  maxWidth: 468,
  width: '100%',
  marginX: 'auto',

  variants: {
    isFullScreen: {
      true: {
        marginX: 0,
        maxWidth: '100%',
      },
    },
  },
});

const Container = styled('div', {
  position: 'absolute',
  zIndex: 16,
});

const Overlay = styled('div', {
  position: 'fixed',
  inset: 0,

  $$background: 'transparent',
  background: '$$background',

  animationName: `${keyframes({
    from: { background: 'transparent' },
    to: { background: '$$background' },
  })}`,
  animationIterationCount: '1',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDuration: `${animationDurationSec}s`,

  variants: {
    closing: {
      true: {
        animationName: `${keyframes({
          from: { background: '$$background' },
          to: { background: 'transparent' },
        })}`,
      },
    },

    color: {
      light: {},
      dark: {
        $$background: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
});

const Sheet = styled('div', {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  maxHeight: `calc(100% - 100px)`,
  paddingBottom: 56,

  borderRadius: '16px 16px 0 0',
  display: 'flex',

  animationName: `${keyframes({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  })}`,
  animationIterationCount: '1',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDuration: `${animationDurationSec}s`,

  variants: {
    closing: {
      true: {
        animationName: `${keyframes({
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' },
        })}`,
      },
    },

    background: {
      light: {
        background: 'white',
      },
      dark: {
        background:
          'linear-gradient(0deg, rgba(245, 245, 245, 1), rgba(196, 196, 196, 1)), linear-gradient(0deg, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8))',
      },
    },

    width: {
      fullWidth: {},
      appWidth: {
        maxWidth: 768,
        width: '100%',
        margin: '0 auto',
      },
    },
  },

  defaultVariants: {
    background: 'light',
  },
});

const Content = styled('div', {
  position: 'relative',
  padding: 20,

  variants: {
    isFullScreen: {
      true: {
        padding: '20px 20px 0 20px',
      },
    },
  },
});

const CloseButton = styled('button', {
  all: 'unset',
  outline: 'revert',
  position: 'absolute',
  top: 17,
  right: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 5,
  margin: -5,
  cursor: 'pointer',
});

export function BottomSheet({
  children,
  swipeable,
  overlay,
  close: closeProp,
  isFullScreen,
  title,
  background,
  width,
}: BottomSheetProps) {
  const [closing, setClosing] = useState(false);
  const startClosing = () => setClosing(true);
  const close = useGetLatest(closeProp);
  useEffect(() => {
    if (!closing) return;

    setTimeout(() => close(), animationDurationSec * 1000);
  }, [close, closing]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const handlers = useSwipeable({
    trackMouse: true,
    delta: 50,
    onSwipedDown: e => {
      if (!swipeable) return;
      if (scrollRef.current && scrollRef.current.scrollTop > 0) return;
      if (e.velocity > 1) return;

      startClosing();
    },
  });
  const ref = composeRefs<HTMLDivElement>(scrollRef, handlers.ref);

  return (
    <Container>
      <Overlay color={overlay} closing={closing} onClick={swipeable ? startClosing : undefined} />
      <Sheet closing={closing} {...handlers} ref={ref} background={background} width={width}>
        <ScrollArea>
          <Content isFullScreen={isFullScreen}>
            <p className="text-xs text-brandLinear font-bold">{title}</p>
            <CloseButton onClick={startClosing} type="button">
              <ChevronDown />
            </CloseButton>
            <ScreenContent isFullScreen={isFullScreen}>{children}</ScreenContent>
          </Content>
        </ScrollArea>
      </Sheet>
    </Container>
  );
}
