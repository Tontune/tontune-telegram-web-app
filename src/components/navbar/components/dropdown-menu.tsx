import { RiAlignJustify } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Dropdown from '@/components/dropdown/dropdown.tsx';
import { Button } from '@/components/ui/button.tsx';

const DropdownMenu = () => {
  return (
    <Dropdown
      button={
        <Button>
          <RiAlignJustify />
        </Button>
      }
      children={
        <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-[25px] shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
          <div className="mt-3 ml-4">
            <Link to="/" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Home&nbsp;🏠
            </Link>
          </div>
          <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

          <div className="mt-3 ml-4 flex flex-col gap-3">
            <Link
              to="/leaderboard"
              className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white"
            >
              Leaderboard&nbsp;🏆
            </Link>
            <Link to="/artists" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Artists&nbsp;🧑‍🎤
            </Link>
            <Link to="/my-tune" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Profile&nbsp;💎
            </Link>
            <Link to="/battles" className="text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white">
              Battles&nbsp;⚔️
            </Link>
            {/* NOTE: next release feature */}
            {/* <div
              className="cursor-pointer text-base font-semibold text-gray-800 dark:text-white hover:dark:text-white flex items-center justify-start"
              onClick={() => {
                if (darkmode) {
                  document.body.classList.remove('dark');
                  setDarkmode(false);
                } else {
                  document.body.classList.add('dark');
                  setDarkmode(true);
                }
              }}
            >
              Switch Theme{' '}
              {darkmode ? (
                <RiSunFill className="ml-2 h-4 w-4 text-gray-800 dark:text-white" />
              ) : (
                <RiMoonFill className="ml-2 h-4 w-4 text-gray-800 dark:text-white" />
              )}
            </div> */}
          </div>
        </div>
      }
      classNames={'py-2 top-[28px] left-[25px] !origin-top-left w-max'}
    />
  );
};

export default DropdownMenu;
