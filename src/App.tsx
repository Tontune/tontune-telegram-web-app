import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'layout';
import { Artist } from 'screens/Artist';
import { Home } from 'screens/Home';
import { NftCollection } from 'screens/NftCollection';
import { TonTransfer } from 'screens/TonTransfer';

import '@twa-dev/sdk';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ton-transfer',
    element: <TonTransfer />,
  },
  { path: '/nft-collections', element: <NftCollection /> },
  { path: '/artist', element: <Artist /> },
]);

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
