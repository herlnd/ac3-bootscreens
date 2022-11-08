import Logo from '../components/Logo';
import Neucom from '../components/CompaniesLogos/Neucom/Neucom';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#FF7E00] row-start-1 row-end-6 col-start-1'></div>
        <section className='bg-[#FF7E00] row-start-1 row-end-6 col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-full grow flex flex-col justify-start items-center'>
            <div className='w-11/12 pt-4 md:w-3/4 md:pt-10'>
              <Logo company='neucom'>
                <Neucom />
              </Logo>
            </div>
            <div className='bg-[#FF4400] w-5/6 mt-10 pt-8 text-center text-white text-xs leading-3 rounded-t-[2.5rem] tracking-widest md:leading-3 grow md:w-4/6 md:text-sm'>
              <p>RESTARTING OS VER. 3.2.2</p>
              <p>USER ID CONFIRMED</p>
              <p>DATA SWALLOW</p>
              <p>IS FOR REGISTERED USE ONLY</p>
            </div>
          </div>
        </section>
        <div className='col-start-5 col-span-1 grid grid-cols-3 row-start-1 row-end-6'>
          <div className='bg-[#FF6A00]'></div>
          <div className='bg-[#FF5600]'></div>
          <div className='bg-[#FF4400]'></div>
        </div>
      </>
    </Layout>
  );
}
