import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[#d1d1d1] w-screen h-screen flex'>
      <section className='w-1/2 h-screen bg-[#818180] flex flex-col justify-center items-center'>
        <div className='w-[380px] h-auto flex justify-center items-center'>
          UPEO
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
