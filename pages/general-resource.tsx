import Logo from '../components/Logo';
import Layout from '../components/Layout/Layout';
import GeneralResource from '../components/CompaniesLogos/GeneralResource/GeneralResource';
import Squares from '../components/CompaniesLogos/GeneralResource/SystemInfo/Squares';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#004765] col-start-1 row-start-1 col-end-6 row-end-6 grid grid-cols-5 grid-rows-12 md:grid-cols-12 md:grid-rows-6'>
          <div className='col-start-1 row-start-1 col-end-5 row-end-10 border-white border-b-2 border-r-2 md:col-end-10 md:row-end-5'></div>
          <div className='row-start-10 row-span-full col-start-4 col-span-full w-2/5 pl-2 pt-1 md:w-full md:row-start-5 md:row-end-7 md:col-start-8 md:col-end-10 md:pl-4 md:pt-2'>
            <Squares />
          </div>
          <div className='col-start-1 col-end-4 row-start-9 row-span-full border-t-2 border-r-2 border-white flex flex-col items-center justify-end pb-4 md:hidden'>
            <div className='text-[#BFFFF8] text-xs leading-5 tracking-widest md:hidden'>
              <p>RESTARTING OS VER. 3.2.2</p>
              <p>User ID confirmed</p>
              <p>DATA SWALLOW</p>
              <p>is for registered use only.</p>
            </div>
          </div>
        </div>

        <div className='hidden md:col-start-1 md:row-start-4 md:col-end-4 md:row-end-6 md:border-white md:border-t-2 md:border-r-2 md:flex md:items-center md:justify-center'>
          <div className='hidden md:block md:text-[#BFFFF8] md:leading-7 md:text-lg md:tracking-widest'>
            <p>RESTARTING OS VER. 3.2.2</p>
            <p>User ID confirmed</p>
            <p>DATA SWALLOW</p>
            <p>is for registered use only.</p>
          </div>
        </div>
        <section className='row-start-2 row-end-5 col-start-2 col-end-5 md:row-start-1 md:row-end-4 md:flex md:flex-col md:justify-start md:items-center'>
          <div className='md:w-3/4 md:pt-10'>
            <Logo company='general resource'>
              <GeneralResource />
            </Logo>
          </div>
        </section>
      </>
    </Layout>
  );
}
