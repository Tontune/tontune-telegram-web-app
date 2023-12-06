import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import {CHAIN} from "@tonconnect/protocol";

import {AudioPlayer} from 'components/audio-player';
import Navbar from 'components/navbar/navbar';

import Alert from "../components/alert/alert.tsx";
import {useTonConnect} from "../hooks/useTonConnect.ts";

export function Layout() {

    const {network, connected} = useTonConnect();

    const [showNetworkAlert, setShowNetworkAlert] = useState(false)

    useEffect(() => {
        const isMainNet = network === CHAIN.MAINNET
        setShowNetworkAlert(isMainNet)
    }, [connected, network]);

    return (
        <div className="flex flex-col min-h-screen w-full bg-background-100 dark:bg-background-900 dark:text-white p-5">

            <Navbar/>

            {showNetworkAlert && <Alert type='warning' text={<>You&rsquo;re on&nbsp;the <strong
                className="font-bold">mainnet</strong> network. This app
                supports&nbsp;
                <strong className="font-bold">testnet</strong> wallets. Ensure your wallet is&nbsp;set to&nbsp;<strong
                    className="font-bold">testnet</strong> to&nbsp;avoid unintended transactions
                or&nbsp;loss. Double-check your settings before proceeding.</>}/>
            }

            <main className="transition-all !py-[35px] font-dm">
                <Outlet/>
            </main>

            <div className="mx-[-20px]">
                <AudioPlayer/>
            </div>
        </div>
    );
}
