import Layout from '../components/Layout/Layout';
import Logo from '../components/Logo';
import GeneralResource from '../components/CompaniesLogos/GeneralResource/GeneralResource';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#A49277] col-start-1'></div>
        <section className='bg-[#A49277] col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-3/4 pt-10'>
            <Logo company='upeo'>
              <GeneralResource />
            </Logo>
          </div>
        </section>
        <div className='bg-[#A49277] col-start-5'></div>
      </>
    </Layout>
  );
}
