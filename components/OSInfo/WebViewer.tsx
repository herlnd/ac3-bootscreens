import PluginsIcons from './PluginsIcons/PluginsIcons';
import DataSwallowLogo from './DataSwallowLogo/DataSwallowLogo';
import ProgressBar from './ProgressBar/ProgressBar';

interface companyType {
  company: string;
}

const WebViewer = ({ company }: companyType) => {
  return (
    <section className='bg-[#F0F0E0] col-start-1 col-span-full row-start-4 row-span-full md:col-start-4 md:row-start-1 md:col-span-2 md:h-screen grid grid-rows-5 grid-cols-5 '>
      <div className='col-start-2 col-span-full row-start-2 row-end-3 flex justify-end items-start md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-4 md:flex md:justify-end'>
        <div className='md:w-1/2 md:h-full md:flex md:items-end md:justify-end '>
          <p className='font-semibold pr-4 md:pr-0 md:block md:pt-4 md:text-md md:text-left md:vertical-rl md:transform md:rotate-180'>
            PLUG IN FILES
          </p>
        </div>
      </div>
      <div className='col-start-2 col-span-full row-start-1 row-end-2 border-l-2 border-b-2 border-black md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-4 md:pb-4 md:pl-4 md:flex md:items-end md:justify-start md:border-l-2'>
        <div className='hidden md:block md:w-1/2'>
          <PluginsIcons />
        </div>
      </div>
      <div className='row-start-3 row-span-full col-start-1 col-end-5 border-t-2 border-black pl-3 pt-2 border-r-2 md:row-start-4 md:row-end-6 md:col-end-6 md:ml-10 md:mt-8 md:pl-6 md:pt-6 md:border-l-2 md:border-r-0'>
        <div className='w-11/12 md:w-9/12 flex flex-col gap-4'>
          <DataSwallowLogo />
          <div>
            <ProgressBar company={company} />
            <p className='text-xs font-semibold md:text-sm md:p-1 md:leading-3'>
              データースワロー40 を接続中です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebViewer;
