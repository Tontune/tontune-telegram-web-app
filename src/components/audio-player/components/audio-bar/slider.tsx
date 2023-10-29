import * as Slider from '@radix-ui/react-slider';
import { styled } from '@stitches/react';

export const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  marginTop: 20,
  marginBottom: 10,

  $$size: '8px',
  '&:active': { $$size: '12px' },
});

export const SliderTrack = styled(Slider.Track, {
  backgroundColor: 'gray',
  position: 'relative',
  flexGrow: 1,
  height: 3,
});

export const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '#4318FF',
  height: '100%',
});
