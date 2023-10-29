import { Outlet } from 'react-router-dom';

import Navbar from 'components/navbar/navbar';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background-100 dark:bg-background-900 dark:text-white p-5">
      <Navbar />

      <main className="transition-all !py-[35px] font-dm">
        <Outlet />
      </main>
    </div>
  );
}
