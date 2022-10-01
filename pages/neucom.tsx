import Link from 'next/link';
import Logo from '../components/Logo';
import Neucom from '../components/CompaniesLogos/Neucom/Neucom';

export default function Home() {
  return (
    <div className='bg-[#d1d1d1] w-screen h-screen flex'>
      <section className='w-1/2 h-screen bg-[#ff8928] flex flex-col justify-center items-center'>
        <div className='w-[380px] h-auto flex justify-center items-center'>
          <Logo company='neucom'>
            <Neucom />
          </Logo>
        </div>
      </section>
      <section className='w-1/2 flex flex-col justify-center items-center'>
        <Link href='/'>
          <button className='bg-[#2a2a2a] rounded-lg font-bold italic text-white p-2'>
            Logout
          </button>
        </Link>
      </section>
    </div>
  );
}
