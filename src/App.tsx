import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'layout';
import { Artist } from 'screens/Artist';
import { BuyNft } from 'screens/BuyNft';
import { Home } from 'screens/Home';

import '@twa-dev/sdk';

import './index.css';

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
      ],
    },
  ],
  { basename: '/tontune-telegram-web-app' },
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
