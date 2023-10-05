import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'layout';
import { Artist } from 'screens/Artist';
import { BuyNft } from 'screens/BuyNft';
import { Home } from 'screens/Home';
import { NftCollection } from 'screens/NftCollection';
import { TonTransfer } from 'screens/TonTransfer';

import '@twa-dev/sdk';

import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/ton-transfer',
        element: <TonTransfer />,
      },
      { path: '/nft-collections', element: <NftCollection /> },
      { path: '/buy-nft', element: <BuyNft /> },
      { path: '/artist', element: <Artist /> },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
