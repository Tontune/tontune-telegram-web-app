import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CHAIN } from '@tonconnect/protocol';

import Alert from '@/components/alert/alert.tsx';
import { AudioPlayer } from '@/components/audio-player';
import { BountiesModal } from '@/components/bounties-modal';
import Navbar from '@/components/navbar/navbar.tsx';
import { openModal } from '@/store/slices/modals.ts';

import { useTonConnect } from '../hooks/useTonConnect.ts';

export function Layout() {

  const { network, connected } = useTonConnect();
  const dispatch = useDispatch();

  const [showNetworkAlert, setShowNetworkAlert] = useState(false);

  useEffect(() => {
    const isMainNet = network === CHAIN.MAINNET;
    setShowNetworkAlert(isMainNet);

    if (connected === true) {
      dispatch(openModal('bountiesModal'));
    }
  }, [connected, network]);



  return (
    <div className='flex flex-col min-h-screen w-full bg-background dark:bg-background-900 dark:text-white p-5'>

      <Navbar />

      {showNetworkAlert && <Alert type='warning' text={<>You&rsquo;re on&nbsp;the <strong
        className='font-bold'>mainnet</strong> network. This app
        supports&nbsp;
        <strong className='font-bold'>testnet</strong> wallets. Ensure your wallet is&nbsp;set to&nbsp;<strong
          className='font-bold'>testnet</strong> to&nbsp;avoid unintended transactions
        or&nbsp;loss. Double-check your settings before proceeding.</>} />
      }

      <main className='transition-all !py-[35px] font-dm'>
        <Outlet />
      </main>

      <div className='mx-[-20px]'>
        <AudioPlayer />
      </div>

      {/* Modals */}
      <BountiesModal/>

    </div>
  );
}
