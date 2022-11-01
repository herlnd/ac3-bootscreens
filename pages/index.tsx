import OrientalComputer from '../components/CompaniesLogos/OrientalComputer/OrientalComputer';
import LoginButton from '../components/MainButtons/LoginButton';

const companies = ['general resource', 'neucom', 'upeo', 'ouroboros'];

export default function Home() {
  return (
    <div className='bg-[#006679] w-screen h-screen grid grid-cols-6 grid-rows-6'>
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
      <div className='row-start-1 row-end-7 col-start-2 col-end-3 grid grid-cols-12'>
        {[...Array(6)].map((elem, index) => {
          return (
            <div
              key={index}
              className={`col-start-${
                4 + index
              } border-r-[0.2rem] border-[#00BDCB]`}
            ></div>
          );
        })}
      </div>
      <div className='col-start-1 col-end-2 row-start-1 row-end-7 grid grid-cols-12 grid-rows-6'>
        <div className='bg-[#000] col-start-10 col-end-13 row-start-1 row-end-6 rounded-br-full'></div>
        <div className='bg-[#000] col-start-1 col-end-10 row-start-1 row-end-7 flex justify-center items-start pt-8'>
          <div className='w-3/4 p-1 border-2 border-[#00BDCB]'>
            <OrientalComputer />
          </div>
        </div>
        <div className='col-start-9 col-end-12 row-start-1 row-end-6 rounded-br-full border-r-8 border-[#00BDCB]'></div>
        <div className='col-start-8 col-end-11 row-start-1 row-end-6 rounded-br-full border-r-8 border-[#00BDCB]'></div>
        <div className='bg-[#006679] row-start-6 row-end-7 col-start-5 col-end-10 rounded-tl-full'></div>
        <div className='row-start-6 row-end-7 col-start-4 col-end-9 rounded-tl-full border-l-8 border-[#00BDCB]'></div>
        <div className='row-start-6 row-end-7 col-start-3 col-end-8 rounded-tl-full border-l-8 border-[#00BDCB]'></div>
      </div>
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
        {companies.map((company, index) => {
          return <LoginButton key={index} company={company} />;
        })}
      </main>
    </div>
  );
}
