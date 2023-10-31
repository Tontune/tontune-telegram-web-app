// Mocks for the playlist

const initialPlaylist = [
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
    free: false,
  },
];

const generatePlaylist = (fullPlaylist: boolean) => {
  if (fullPlaylist) {
    return [
      ...initialPlaylist,
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
        free: true,
      },
    ];
  }

  return initialPlaylist;
};

export default generatePlaylist;
