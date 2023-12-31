import { CHAIN, TonConnectButton } from '@tonconnect/ui-react';
import { twJoin } from 'tailwind-merge';

import { Label } from '@/components/ui/label.tsx';
import { useTonConnect } from '@/hooks/useTonConnect.ts';

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
      <div
        className='relative flex h-[61px] w-full max-w-[420px] items-center justify-between gap-3 rounded-full bg-white p-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none'>

        <>
          <div className='relative'>
            <DropdownMenu />
          </div>

          {network && (
            <Label className='font-bold'>
              {network === CHAIN.MAINNET ? 'Mainnet' : 'Testnet'}
            </Label>
          )}
        </>


        <div>
          <TonConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
