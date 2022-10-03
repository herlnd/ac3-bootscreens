import Logo from '../components/Logo';
import Layout from '../components/Layout/Layout';
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
    <Layout>
      <>
        <div className='bg-[#004765] col-start-1'></div>
        <section className='bg-[#004765] col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-3/4 pt-10'>
            <Logo company='general resource'>
              <GeneralResource />
            </Logo>
          </div>
          <p className='text-white text-3xl font-semibold -translate-y-6 ease-in duration-3000'>
            {displayName}
          </p>
        </section>
        <div className='bg-[#004765] col-start-5'></div>
      </>
    </Layout>
  );
}
