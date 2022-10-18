import PluginsIcons from './PluginsIcons/PluginsIcons';
import DataSwallowLogo from './DataSwallowLogo/DataSwallowLogo';
import ProgressBar from './ProgressBar/ProgressBar';

interface companyType {
  company: string;
}

const WebViewer = ({ company }: companyType) => {
  return (
    <section className='bg-[#F0F0E0] col-start-4 col-span-2 h-screen grid grid-rows-5 grid-cols-5 '>
      <div className='col-start-4 col-end-5 row-start-1 row-end-4 flex justify-end'>
        <div className='w-1/2 h-full flex items-end justify-end '>
          <p className='pt-4 text-md text-left vertical-rl font-semibold transform rotate-180'>
            PLUG IN FILES
          </p>
        </div>
      </div>
      <div className='col-start-5 col-end-6 row-start-1 row-end-4 pb-4 pl-4 flex items-end justify-start border-l-2 border-b-2 border-black'>
        <div className='w-1/2'>
          <PluginsIcons />
        </div>
      </div>
      <div className='row-start-4 row-end-6 col-start-1 col-end-6 flex items-start justify-start ml-10 mt-8 pl-6 pt-6 border-l-2 border-t-2 border-black'>
        <div className='w-9/12 flex flex-col gap-4'>
          <DataSwallowLogo />
          <div>
            <ProgressBar company={company} />
            <p className='text-sm font-semibold p-1 leading-3'>
              データースワロー40 を接続中です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebViewer;
