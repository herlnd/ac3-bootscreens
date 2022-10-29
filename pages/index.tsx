import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[#006679] w-screen h-screen grid grid-cols-6 grid-rows-6'>
      {[...Array(3)].map((elem, index) => {
        return (
          <div
            key={index}
            className={`row-start-${
              1 + index * 2
            } col-start-1 col-end-7 border-b-2 border-[#00BDCB]`}
          ></div>
        );
      })}
      <div className='row-start-1 row-end-7 col-start-2 col-end-2 grid grid-cols-12'>
        {[...Array(7)].map((elem, index) => {
          return (
            <div
              key={index}
              className={`col-start-${4 + index} border-r-2 border-[#00BDCB]`}
            ></div>
          );
        })}
      </div>
      <div className='bg-[#000] col-start-1 col-end-2 row-start-1 row-end-7'></div>
      <div className='w-11/12 row-start-1 row-end-3 col-start-2 col-end-7 flex items-end'>
        <div className='relative bg-[#000] w-11/12 h-2/3 rounded-r-[3rem] border-r-[0.75rem] border-y-[0.5rem] border-[#00B5C3]'>
          <div className='absolute bg-[#92CCD7] w-[101%] h-2/5 -top-[1.8rem] left-0 rounded-r-[1rem] border-r-[0.5rem] border-y-[0.5rem] border-[#000] flex justify-between px-6'>
            <div className='text-[#000] font-extrabold text-3xl'>Nemo</div>
            <div className='bg-[#000] text-[#92CCD7] font-bold text-lg py-1 my-1 px-6 rounded-full flex justify-center items-center'>
              hard
            </div>
          </div>
        </div>
      </div>
      <main className='w-4/5 col-start-3 col-end-6 row-start-3 row-end-6 flex flex-col justify-center gap-4'>
        <div className='bg-[#f2f2f2] rounded-lg border-4 border-black flex items-center justify-between'>
          <p className='font-bold text-2xl'>General Resource</p>
          <Link href='/general-resource'>
            <button className='bg-[#2a2a2a] text-white px-4 py-2 font-bold'>
              Login
            </button>
          </Link>
        </div>

        <div className='bg-[#f2f2f2] rounded-lg border-4 border-black flex items-center justify-between'>
          <p className='font-bold text-2xl'>Neucom</p>
          <Link href='/neucom'>
            <button className='bg-[#2a2a2a] text-white px-4 py-2 font-bold'>
              Login
            </button>
          </Link>
        </div>

        <div className='bg-[#f2f2f2] rounded-lg border-4 border-black flex items-center justify-between'>
          <p className='font-bold text-2xl'>Upeo</p>
          <Link href='/upeo'>
            <button className='bg-[#2a2a2a] text-white px-4 py-2 font-bold'>
              Login
            </button>
          </Link>
        </div>

        <div className='bg-[#f2f2f2] rounded-lg border-4 border-black flex items-center justify-between'>
          <p className='font-bold text-2xl'>Ouroboros</p>
          <Link href='/ouroboros'>
            <button className='bg-[#2a2a2a] text-white px-4 py-2 font-bold'>
              Login
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
