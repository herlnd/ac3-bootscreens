import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[#e0e0e0] w-screen h-screen flex flex-col justify-center items-center'>
      <main className='w-1/2'>
        <section className='flex justify-between'>
          <div className='flex flex-col items-center gap-2.5'>
            <p className='text-[#2a2a2a] font-bold text-2xl'>
              General Resource
            </p>
            <Link href='/general-resource'>
              <button className='bg-[#2a2a2a] text-white rounded-lg w-20 py-2 font-bold'>
                Login
              </button>
            </Link>
          </div>

          <div className='flex flex-col items-center gap-2.5'>
            <p className='text-[#2a2a2a] font-bold text-2xl'>Neucom</p>
            <Link href='/neucom'>
              <button className='bg-[#2a2a2a] text-white rounded-lg w-20 py-2 font-bold'>
                Login
              </button>
            </Link>
          </div>

          <div className='flex flex-col items-center gap-2.5'>
            <p className='text-[#2a2a2a] font-bold text-2xl'>Upeo</p>
            <Link href='/upeo'>
              <button className='bg-[#2a2a2a] text-white rounded-lg w-20 py-2 font-bold'>
                Login
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
