'use client';

import Layout from '../../components/Layout/Layout';
import Logo from '../../components/Logo';
import Ouroboros from '../../components/CompaniesLogos/Ouroboros/Ouroboros';
import OuroborosInfo from '../../components/CompaniesLogos/Ouroboros/SystemInfo/OuroborosInfo';

export default function OuroborosPage() {
  return (
    <Layout company='ouroboros'>
      <>
        <div className='bg-[#000] row-start-1 row-end-6 col-start-1'></div>
        <section className='bg-[#000] row-start-1 row-end-6 col-start-2 col-span-3 flex flex-col justify-around items-center'>
          <div className='w-2/3'>
            <Logo company='ouroboros'>
              <Ouroboros />
            </Logo>
          </div>
          <OuroborosInfo />
        </section>
        <div className='bg-[#000] row-start-1 row-end-6 col-start-5'></div>
      </>
    </Layout>
  );
} 