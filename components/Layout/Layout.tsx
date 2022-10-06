import DataSwallowLogo from '../OSInfo/DataSwallowLogo/DataSwallowLogo';
import ProgressBar from '../OSInfo/ProgressBar/ProgressBar';
import Link from 'next/link';
import PluginsIcons from '../OSInfo/PluginsIcons/PluginsIcons';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-screen h-screen grid grid-cols-5'>
      <section className='col-start-1 col-span-3 grid grid-cols-5'>
        {children}
      </section>
      <section className='bg-[#F0F0E0] col-start-4 col-span-2 h-screen grid grid-rows-5 grid-cols-5 '>
        <div className='col-start-5 col-end-6 row-start-1 row-end-4 pb-4 pl-4 flex items-end justify-start border-l-2 border-b-2 border-black'>
          <div className='w-[50%] '>
            <PluginsIcons />
          </div>
        </div>
        <div className='row-start-4 row-end-6 col-start-1 col-end-6 flex items-start justify-start ml-10 mt-8 pl-6 pt-6 border-l-2 border-t-2 border-black'>
          <div className='w-9/12 flex flex-col gap-4'>
            <DataSwallowLogo />
            <div>
              <ProgressBar />
              <p className='text-sm font-semibold p-1 leading-3'>
                データースワロー40 を接続中です。
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='fixed bottom-5 right-5'>
        <Link href='/'>
          <button className='w-10 h-10 bg-[#2a2a2a] rounded-full font-bold text-white animate-pulse'>
            X
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
