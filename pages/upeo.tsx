import Layout from '../components/Layout/Layout';
import Logo from '../components/Logo';
import Upeo from '../components/CompaniesLogos/Upeo/Upeo';

export default function Home() {
  return (
    <Layout>
      <>
        <section className='bg-[#A49277] col-start-1 col-end-6 flex flex-col justify-center pb-20 items-center'>
          <div className='w-3/4 flex items-center justify-around'>
            <div className='w-5/12 flex items-center justify-center'>
              <Logo company='upeo'>
                <Upeo />
              </Logo>
            </div>
            <div className='pt-14 w-2/4 text-white leading-5 text-lg tracking-widest flex flex-col justify-center items-start'>
              <p>RESTARTING OS VER. 3.2.2</p>
              <p>User ID confirmed</p>
              <p>DATA SWALLOW</p>
              <p>is for registered use only.</p>
            </div>
          </div>
          <div className='bg-[#646464] w-full h-8'></div>
        </section>
      </>
    </Layout>
  );
}
