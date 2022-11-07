import OrientalComputer from '../components/CompaniesLogos/OrientalComputer/OrientalComputer';
import LoginButton from '../components/MainButtons/LoginButton';

const companies = ['general resource', 'neucom', 'upeo', 'ouroboros'];

export default function Home() {
  return (
    <main
      id='bg-layout'
      className='bg-[#006679] w-screen h-screen grid grid-cols-6 grid-rows-6'
    >
      {[...Array(3)].map((elem, index) => {
        return (
          <div
            key={index}
            className={`row-start-${
              1 + index * 2
            } col-start-1 col-end-7 border-b-[0.2rem] border-[#00BDCB]`}
          ></div>
        );
      })}
      <div className='hidden md:row-start-1 md:row-span-full md:col-start-2 md:col-end-3 md:grid md:grid-cols-12'>
        {[...Array(6)].map((elem, index) => {
          return (
            <div
              key={index}
              className={`border-r-[0.2rem] border-[#00BDCB] col-start-${
                4 + index
              }`}
            ></div>
          );
        })}
      </div>
      <div className='row-start-1 row-span-full col-start-2 col-end-3 grid grid-cols-6 md:hidden'>
        {[...Array(6)].map((elem, index) => {
          return (
            <div
              key={index}
              className={`border-r-[0.2rem] border-[#00BDCB] col-start-${
                1 + index
              }`}
            ></div>
          );
        })}
      </div>
      <section
        id='computer-info'
        className='bg-[#000] col-start-1 col-span-full row-start-5 row-span-full grid grid-rows-2 grid-cols-6 h-1/2 self-center md:h-full md:bg-transparent md:col-end-2 md:row-start-1 md:row-end-7 md:grid md:grid-cols-12 md:grid-rows-6'
      >
        <div className='bg-[#000] md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-6 md:rounded-br-full'></div>
        <div className='bg-[#000] col-start-1 col-span-2 row-start-1 row-span-full grid place-items-center md:col-start-1 md:col-end-10 md:row-start-1 md:row-end-7 md:flex md:justify-center md:items-start md:pt-8'>
          <div className='w-3/4 p-1 border-2 border-[#00BDCB]'>
            <OrientalComputer />
          </div>
        </div>
        <div className='col-start-3 col-span-full row-start-1 row-span-full md:col-start-2 md:col-end-5 md:row-start-3 md:row-end-6 flex flex-col-reverse md:flex-row justify-center items-start'>
          <div className='text-[#00BDCB] text-sm font-semibold italic md:vertical-rl'>
            Oriental Computer USEA 2043.
          </div>
          <div className='text-[#00BDCB] text-sm font-bold italic md:text-lg md:vertical-rl'>
            PROGRAMMING THE FUTURE
          </div>
        </div>
        <div className='md:col-start-9 md:col-end-12 md:row-start-1 md:row-end-6 md:rounded-br-full md:border-r-8 md:border-[#00BDCB]'></div>
        <div className='md:col-start-8 md:col-end-11 md:row-start-1 md:row-end-6 md:rounded-br-full md:border-r-8 border-[#00BDCB]'></div>
        <div className='md:bg-[#006679] md:row-start-6 md:row-end-7 md:col-start-5 md:col-end-10 md:rounded-tl-full'></div>
        <div className='md:row-start-6 md:row-end-7 md:col-start-4 md:col-end-9 md:rounded-tl-full md:border-l-8 md:border-[#00BDCB]'></div>
        <div className='md:row-start-6 md:row-end-7 md:col-start-3 md:col-end-8 md:rounded-tl-full md:border-l-8 md:border-[#00BDCB]'></div>
      </section>
      <header
        id='header'
        className='col-start-1 col-span-full row-start-1 row-span-1 w-11/12 flex items-end md:col-start-2 md:row-end-3'
      >
        <div className='relative bg-[#000] w-11/12 h-2/3 rounded-r-[1.5rem] border-r-[0.75rem] border-y-[0.5rem] border-[#00B5C3] flex justify-start items-center pl-8 md:rounded-r-[3rem]'>
          <div className='text-white text-lg md:text-2xl'>
            Log in to your organization...
          </div>
          <div className='absolute bg-[#92CCD7] w-[104%] md:w-[101%] h-4/5 -top-[1.8rem] left-0 rounded-r-[1rem] border-r-[0.5rem] border-y-[0.5rem] border-[#000] flex justify-between items-center px-3 md:h-2/5 md:px-6'>
            <div className='text-[#000] text-xl font-extrabold md:text-3xl'>
              Nemo
            </div>
            <div className='bg-[#000] text-[#92CCD7] font-bold h-[1rem] px-4 rounded-full flex justify-center items-center md:h-[1.25rem] md:py-1 md:px-6 md:text-lg'>
              hard
            </div>
          </div>
        </div>
      </header>
      <section
        id='log-in-buttons'
        className='col-start-1 col-span-full row-start-2 row-end-6 flex flex-col justify-center pb-14 md:pb-0 gap-4 md:w-4/5 md:col-start-3 md:col-end-6 md:row-start-3 md:row-end-6'
      >
        {companies.map((company, index) => {
          return <LoginButton key={index} company={company} />;
        })}
      </section>
    </main>
  );
}
