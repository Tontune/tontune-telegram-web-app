import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/layout';
import { Artist } from '@/screens/Artist';
import { BuyNft } from '@/screens/BuyNft';
import { Home } from '@/screens/Home';
import { makeStore } from '@/store';

import '@twa-dev/sdk';

import {MyTune} from "./screens/MyTune";

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
        { path: '/artist', element: <Artist /> },
        { path: '/my-tune', element: <MyTune /> },
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
