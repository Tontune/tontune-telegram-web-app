import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IListen } from '@/types/listen';

interface InitialListenState {
  isStartListen: boolean;
  audioIndex: number;
  playlist: IListen[];
}

const initialListenState: InitialListenState = {
  isStartListen: false,
  audioIndex: 0,
  playlist: [],
};

const listen = createSlice({
  name: 'listen',
  initialState: initialListenState,
  reducers: {
    setIsStartListen(state, { payload }: PayloadAction<boolean>) {
      return {
        ...state,
        isStartListen: payload,
      };
    },
    setAudioIndex(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        audioIndex: payload,
      };
    },
    setPlaylist(state, { payload }: PayloadAction<IListen[]>) {
      return {
        ...state,
        playlist: payload,
      };
    },
  },
});

export const { setIsStartListen, setAudioIndex, setPlaylist } = listen.actions;

export default listen.reducer;
