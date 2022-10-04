import ProgressBar from './ProgressBar/ProgressBar';
import Link from 'next/link';
import DataSwallowLogo from './DataSwallowLogo/DataSwallowLogo';

const DataSwallow = () => {
  return (
    <main className='h-screen bg-[#F0F0E0] flex flex-col justify-center items-center px-20 gap-6'>
      <h1 className='font-bold text-3xl'>DATA SWALLOW 40</h1>
      <Link href='/'>
        <button className='bg-[#2a2a2a] rounded-lg font-bold italic text-white p-2'>
          Logout
        </button>
      </Link>
      <DataSwallowLogo />
      <ProgressBar />
      <div className='text-sm'>データースワロー40 を接続中です。</div>
    </main>
  );
};

export default DataSwallow;
