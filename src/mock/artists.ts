import avatar1 from '@/assets/img/avatars/avatar1.png?url';
import M88G from '@/assets/img/avatars/M88G.jpg?url';
import m88gTrackImg2 from '@/assets/img/backgrounds/eta-osen-background-m88g.jpg?url';
import m88gTrackImg1 from '@/assets/img/backgrounds/fitil-background-m88g.jpg?url';
import bannerM88G from '@/assets/img/backgrounds/m88g-background.jpg?url';
import bannerDefault from '@/assets/img/banners/banner.png?url';
import playlistImg2 from '@/assets/img/nfts/NFT-2.jpg?url';
import playlistImg3 from '@/assets/img/nfts/NFT-3.jpg?url';
import playlistImg1 from '@/assets/img/nfts/NFT-4.jpg?url';
import m88gArtistTrack2 from '@/assets/sound/eta-osen-m88g.mp3?url';
import m88gArtistTrack1 from '@/assets/sound/fitil-m88g.wav?url';
import nftArtistTrack2 from '@/assets/sound/future-bass.mp3?url';
import nftArtistTrack1 from '@/assets/sound/test-track.mp3?url';
import nftArtistTrack3 from '@/assets/sound/upbeat-electro.mp3?url';

export const artistsMock = [
  {
    name: 'M88G',
    img: M88G,
    link: '/artists/m88g',
    banner: bannerM88G,
    genre: 'Hip Hop',
    followers: 3000,
    NFTMinted: 72,
    upcomingEvent: {
      name: 'M88G Live',
      date: '2024-10-01',
      time: '21:00',
      location: 'Los Angeles, CA',
      description: 'M88G will be performing live at the Staples Center in Los Angeles, CA.',
    },
    playlist: [
      {
        id: '1',
        audioUrl: m88gArtistTrack1,
        name: 'Фитиль',
        description: '[prod. by Cloud0]',
        author: 'M88G',
        year: 2022,
        country: 'Russia',
        duration: 177,
        imageUrl: m88gTrackImg1,
        free: true,
      },
      {
        id: '2',
        audioUrl: m88gArtistTrack2,
        name: 'Эта осень',
        description: '',
        author: 'M88G',
        year: 2021,
        country: 'Russia',
        duration: 138,
        imageUrl: m88gTrackImg2,
        free: true,
      },
    ],
  },
  {
    name: 'NFT Musician',
    img: avatar1,
    link: '/artists/nft-musician',
    banner: bannerDefault,
    genre: 'Electro-Folk',
    followers: 733,
    NFTMinted: 5,
    upcomingEvent: {
      name: 'NFT Musician Live',
      date: '2024-12-10',
      time: '21:00',
      location: 'Los Angeles, CA',
      description: 'NFT Musician will be performing live at the Staples Center in Los Angeles, CA.',
    },
    playlist: [
      {
        id: 'id_1',
        audioUrl: nftArtistTrack1,
        name: 'Celestial Intro',
        description: 'Celestial Harmonics introduction',
        author: 'Lila Everwood',
        year: 2023,
        country: 'World',
        duration: 93,
        imageUrl: playlistImg1,
        free: true,
      },
      {
        id: 'id_2',
        audioUrl: nftArtistTrack2,
        name: 'Celestial Future Bass',
        description: 'Celestial Harmonics introduction',
        author: 'Lila Everwood',
        year: 2023,
        country: 'World',
        duration: 93,
        imageUrl: playlistImg2,
        free: true,
      },
      {
        id: 'id_3',
        audioUrl: nftArtistTrack3,
        name: 'Celestial Upbeat Electro',
        description: 'Celestial Harmonics introduction',
        author: 'Lila Everwood',
        year: 2023,
        country: 'World',
        duration: 93,
        imageUrl: playlistImg3,
        free: false,
      },
    ],
  },
];
