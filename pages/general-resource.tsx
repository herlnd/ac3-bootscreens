import Logo from '../components/Logo';
import Layout from '../components/Layout/Layout';
import GeneralResource from '../components/CompaniesLogos/GeneralResource/GeneralResource';

export default function Home() {
  return (
    <Layout>
      <>
        <div className='bg-[#004765] col-start-1'></div>
        <section className='bg-[#004765] col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-3/4 pt-10'>
            <Logo company='general resource'>
              <GeneralResource />
            </Logo>
          </div>
        </section>
        <div className='bg-[#004765] col-start-5'></div>
      </>
    </Layout>
  );
}
