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
  playlist: [
    {
      id: 'id_1',
      audioUrl: 'sound/test-track.mp3',
      name: 'Celestial Intro',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/NFT-2.jpg',
      free: true,
    },
    {
      id: 'id_2',
      audioUrl: 'sound/future-bass.mp3',
      name: 'Celestial Future Bass',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/NFT-3.jpg',
      free: true,
    },
    {
      id: 'id_3',
      audioUrl: 'sound/upbeat-electro.mp3',
      name: 'Celestial Upbeat Electro',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/NFT-4.jpg',
      free: false,
    },
  ],
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
