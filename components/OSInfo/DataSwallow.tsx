import ProgressBar from './ProgressBar';
import Head from 'next/head';

const DataSwallow = () => {
  return (
    <>
      <Head>
        <title>General Resource LTD</title>
      </Head>
      <section className='w-2/3'>
        <ProgressBar />
        <div className='text-sm'>データースワロー40 を接続中です。</div>
      </section>
    </>
  );
};

export default DataSwallow;
