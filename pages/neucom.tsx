import Logo from '../components/Logo';
import Neucom from '../components/CompaniesLogos/Neucom/Neucom';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#FF7E00] col-start-1'></div>
        <section className='bg-[#FF7E00] col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-full grow flex flex-col justify-start items-center'>
            <div className='w-3/4 pt-10'>
              <Logo company='neucom'>
                <Neucom />
              </Logo>
            </div>
            <div className='w-4/6 mt-10 pt-8 text-center text-white text-sm bg-[#FF4400] rounded-t-[2.5rem] tracking-widest leading-3 grow'>
              <p>RESTARTING OS VER. 3.2.2</p>
              <p>USER ID CONFIRMED</p>
              <p>DATA SWALLOW</p>
              <p>IS FOR REGISTERED USE ONLY</p>
            </div>
          </div>
        </section>
        <div className='col-start-5 col-span-1 grid grid-cols-3'>
          <div className='bg-[#FF6A00]'></div>
          <div className='bg-[#FF5600]'></div>
          <div className='bg-[#FF4400]'></div>
        </div>
      </>
    </Layout>
  );
}
