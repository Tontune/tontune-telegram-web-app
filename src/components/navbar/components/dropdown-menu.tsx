import { RiAlignJustify } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Button from 'components/button/button';
import Dropdown from 'components/dropdown/dropdown';

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
      classNames={'py-2 bottom-[-150px] left-[25px] !origin-top-left w-max'}
    />
  );
};

export default DropdownMenu;
