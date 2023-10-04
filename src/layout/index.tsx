import FixedPlugin from 'components/fixedPlugin/FixedPlugin';
import Navbar from 'components/navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background-100 dark:bg-background-900 dark:text-white p-5">
      <Navbar />

      <main className="transition-all !py-[35px] font-dm">{children}</main>

      <FixedPlugin />
    </div>
  );
}
