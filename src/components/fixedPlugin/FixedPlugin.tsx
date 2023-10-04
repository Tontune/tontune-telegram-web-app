import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export default function FixedPlugin() {
  const [darkmode, setDarkmode] = React.useState(document.body.classList.contains('dark'));

  return (
    <button
      className="border-px fixed bottom-[20px] right-[25px] !z-[99] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-brand-400 to-brand-600 p-0"
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
      <div className="cursor-pointer text-gray-600">
        {darkmode ? <RiSunFill className="h-4 w-4 text-white" /> : <RiMoonFill className="h-4 w-4 text-white" />}
      </div>
    </button>
  );
}
