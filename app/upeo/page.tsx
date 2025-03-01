'use client';

import Layout from '../../components/Layout/Layout';
import Logo from '../../components/Logo';
import Upeo from '../../components/CompaniesLogos/Upeo/Upeo';

export default function UpeoPage() {
  return (
    <Layout company='upeo'>
      <>
        <section className='bg-upeoBrown row-start-1 row-end-6 col-start-1 col-end-6 flex flex-col justify-center pb-8 items-center md:pb-20'>
          <div className='w-3/4 flex items-center justify-around'>
            <div className='w-5/12 flex items-center justify-center'>
              <Logo company='upeo'>
                <Upeo />
              </Logo>
            </div>
            <div className='text-white pt-4 text-xs leading-1 md:text-lg md:tracking-widest md:leading-5 md:pt-14 md:w-2/4 flex flex-col justify-center items-start'>
              <p>RESTARTING OS VER. 3.2.2</p>
              <p>User ID confirmed</p>
              <p>DATA SWALLOW</p>
              <p>is for registered use only.</p>
            </div>
          </div>
          <div className='bg-upeoBrown2 w-full h-8'></div>
        </section>
      </>
    </Layout>
  );
} 