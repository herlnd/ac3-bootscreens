import Logo from '../components/Logo';
import Link from 'next/link';
import DataSwallow from '../components/OSInfo/DataSwallow';
import { setTimeout } from 'timers';
import { useEffect, useState } from 'react';
import GeneralResource from '../components/CompaniesLogos/GeneralResource/GeneralResource';

export default function Home() {
  const [displayName, setDisplayName] = useState<string>();
  const showName = () => {
    setDisplayName(' General Resource LTD.');
  };

  useEffect(() => {
    const delayName = setTimeout(showName, 100);
    return () => {
      clearTimeout(delayName);
    };
  }, []);

  return (
    <div className='bg-[#F0F0E0] w-screen h-screen flex'>
      <section className='w-1/2 h-screen bg-[#003358] flex flex-col justify-center items-center'>
        <div className='w-[380px] h-auto flex flex-col justify-center items-center'>
          <Logo company='general resource'>
            <GeneralResource />
          </Logo>
        </div>
        <p className='text-white text-3xl font-semibold -translate-y-6 ease-in duration-3000'>
          {displayName}
        </p>
      </section>
      <section className='w-1/2 flex flex-col justify-center items-center'>
        <Link href='/'>
          <button className='bg-[#2a2a2a] rounded-lg font-bold italic text-white p-2'>
            Logout
          </button>
        </Link>
        <DataSwallow />
      </section>
    </div>
  );
}
