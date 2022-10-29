import Logo from '../components/Logo';
import Layout from '../components/Layout/Layout';
import GeneralResource from '../components/CompaniesLogos/GeneralResource/GeneralResource';
import Squares from '../components/CompaniesLogos/GeneralResource/SystemInfo/Squares';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#004765] col-start-1 row-start-1 col-end-6 row-end-6 grid grid-cols-12 grid-rows-6'>
          <div className='col-start-1 row-start-1 col-end-10 row-end-5 border-white border-b-2 border-r-2'></div>
          <div className='row-start-5 row-end-7 col-start-8 col-end-10 pl-4 pt-2'>
            <Squares />
          </div>
        </div>
        <div className='col-start-1 row-start-4 col-end-4 row-end-6 border-white border-t-2 border-r-2 flex items-center justify-center'>
          <div className='text-[#BFFFF8] leading-7 text-lg tracking-widest'>
            <p>RESTARTING OS VER. 3.2.2</p>
            <p>User ID confirmed</p>
            <p>DATA SWALLOW</p>
            <p>is for registered use only.</p>
          </div>
        </div>
        <section className='row-start-1 col-start-2 row-end-4 col-end-5 flex flex-col justify-start items-center'>
          <div className='w-3/4 pt-10'>
            <Logo company='general resource'>
              <GeneralResource />
            </Logo>
          </div>
        </section>
      </>
    </Layout>
  );
}
