import Layout from '../components/Layout/Layout';
import Logo from '../components/Logo';
import Ouroboros from '../components/CompaniesLogos/Ouroboros/Ouroboros';

export default function Home() {
  return (
    <Layout company='ouroboros'>
      <>
        <div className='bg-[#000] col-start-1'></div>
        <section className='bg-[#000] col-start-2 col-span-3 flex flex-col justify-start items-center'>
          <div className='w-3/4 pt-10'>
            <Logo company='ouroboros'>
              <Ouroboros />
            </Logo>
          </div>
        </section>
        <div className='bg-[#000] col-start-5'></div>
      </>
    </Layout>
  );
}
