import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListen } from 'types/listen';

interface InitialListenState {
  isStartListen: boolean;
  playlist: IListen[];
}

const initialListenState: InitialListenState = {
  isStartListen: false,
  playlist: [
    {
      id: '1',
      audioUrl: 'sound/test-track.mp3',
      name: 'Celestial Intro',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/NFT-item.jpeg',
      free: true,
    },
    {
      id: '2',
      audioUrl: 'sound/future-bass.mp3',
      name: 'Celestial Future Bass',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/Nft4.png',
      free: true,
    },
    {
      id: '3',
      audioUrl: 'sound/upbeat-electro.mp3',
      name: 'Celestial Upbeat Electro',
      description: 'Celestial Harmonics introduction',
      author: 'Lila Everwood',
      year: 2023,
      country: 'World',
      duration: 93,
      imageUrl: 'img/nfts/Nft6.png',
      free: true,
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
    setPlaylist(state, { payload }: PayloadAction<IListen[]>) {
      return {
        ...state,
        playlist: payload,
      };
    },
  },
});

export const { setIsStartListen, setPlaylist } = listen.actions;

export default listen.reducer;
