import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/layout';
import { Artist } from '@/screens/Artist';
import { Artists } from '@/screens/Artists';
import { Battles } from '@/screens/Battles';
import { BuyNft } from '@/screens/BuyNft';
import { Event } from '@/screens/Event';
import { Events } from '@/screens/Events';
import { Home } from '@/screens/Home';
import { Leaderboard } from '@/screens/Leaderboard';
import { MyTune } from '@/screens/MyTune';
import { WorkInProgress } from '@/screens/WorkInProgress';
import { makeStore } from '@/store';

import '@twa-dev/sdk';

import { artistsMock } from './mock/artists.ts';
import { leadersMock } from './mock/leaders.ts';

import './index.css';

const store = makeStore();

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '/buy-nft', element: <BuyNft /> },
        {
          path: '/artists',
          children: [
            {
              index: true,
              element: <Artists />,
            },
            {
              path: 'nft-musician',
              element: <Artist artistInfo={artistsMock[1]} />,
            },
            {
              path: 'm88g',
              element: <Artist artistInfo={artistsMock[0]} />,
            },
          ],
        },
        { path: '/my-tune', element: <MyTune /> },
        { path: '/leaderboard', element: <Leaderboard leaders={leadersMock} /> },
        { path: '/staking', element: <WorkInProgress /> },
        { path: '/battles', element: <Battles /> },
        { path: '/tokens', element: <WorkInProgress /> },
        {
          path: '/events',
          children: [
            {
              index: true,
              element: <Events />,
            },
            {
              path: ':id',
              element: <Event />,
            },
          ],
        },
      ],
    },
  ],
  { basename: '/tontune-telegram-web-app' },
);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
