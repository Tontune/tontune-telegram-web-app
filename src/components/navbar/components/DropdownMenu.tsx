import { RiAlignJustify } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Button from 'components/button';
import Dropdown from 'components/dropdown';

const DropdownMenu = () => {
  return (
    <Dropdown
      button={
        <Button extra="w-auto !bg-telegramButton" variant="primary">
          <RiAlignJustify />
        </Button>
      }
      children={
        <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-[0_20px_25px_-5px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
          <div className="mt-3 ml-4">
            <div className="flex items-center gap-2">
              <p className="text-base font-bold text-navy-700 dark:text-white">👋 Hey, Adela</p>
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

          <div className="mt-3 ml-4 flex flex-col gap-3">
            <Link to="/" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Home
            </Link>
            <Link to="/artist" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Artist
            </Link>
            <Link to="/nft-collections" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              NFT Collections
            </Link>
            <Link to="/ton-transfer" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Transfer TON
            </Link>
          </div>
        </div>
      }
      classNames={'py-2 bottom-[-215px] left-[25px] !origin-top-left w-max'}
    />
  );
};

export default DropdownMenu;
