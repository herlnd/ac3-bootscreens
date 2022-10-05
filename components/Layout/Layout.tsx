import DataSwallowLogo from '../OSInfo/DataSwallowLogo/DataSwallowLogo';
import ProgressBar from '../OSInfo/ProgressBar/ProgressBar';
import Link from 'next/link';

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
        <div className='col-start-5 col-end-6 row-start-1 row-end-4 bg-green-200 mb-10 ml-1 border-l-2 border-b-2 border-black'>
          ICONS
        </div>
        <div className='row-start-2 row-end-3 col-start-1 col-end-4'>
          <h1 className='font-bold text-3xl'>DATA SWALLOW 40</h1>
          <Link href='/'>
            <button className='bg-[#2a2a2a] rounded-lg font-bold italic text-white p-2'>
              Logout
            </button>
          </Link>
        </div>
        <div className='row-start-4 row-end-6 col-start-1 col-end-6 flex items-center justify-center ml-10 border-l-2 border-t-2 border-black'>
          <div className='w-5/6 flex flex-col gap-4'>
            <DataSwallowLogo />
            <div>
              <ProgressBar />
              <div className='text-md font-bold'>
                データースワロー40 を接続中です。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
