import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from 'hooks/useTonConnect';
import { twJoin } from 'tailwind-merge';

import Button from 'components/button/button';

import DropdownMenu from './components/dropdown-menu';

const Navbar = () => {
  const { network } = useTonConnect();

  return (
    <nav
      className={twJoin(
        'z-10 flex items-center justify-center rounded-xl transition-all',
        'w-full',
        'backdrop-blur-sm dark:bg-[#0b14374d] md:top-4 xl:top-[20px]',
      )}
    >
      <div className="relative flex h-[61px] w-full max-w-[420px] items-center justify-around gap-3 rounded-full bg-white p-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none">
        <div className="relative">
          <DropdownMenu />
        </div>

        <Button extra="w-auto !bg-telegramButton" variant="primary">
          {network ? (network === CHAIN.MAINNET ? 'mainnet' : 'testnet') : 'N/A'}
        </Button>

        <TonConnectButton />
      </div>
    </nav>
  );
};

export default Navbar;
