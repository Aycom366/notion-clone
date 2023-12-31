import { Navbar } from "./_components/Navbar";

const MarketLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='h-full dark:bg-[#1f1f1f]'>
    <Navbar />
    <main className='h-full pt-40 '>{children}</main>
  </div>
);

export default MarketLayout;
