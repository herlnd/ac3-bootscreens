import WebViewer from '../OSInfo/WebViewer';
import Link from 'next/link';

type Props = {
  children: JSX.Element;
  company: string;
};

const Layout: React.FC<Props> = ({ children, company }) => {
  return (
    <section className='w-screen h-screen grid grid-cols-1 grid-rows-5 md:grid-cols-5 md:grid-rows-1'>
      <section className='col-start-1 col-span-full row-start-1 row-end-4 grid grid-cols-5 grid-rows-5 md:col-span-3'>
        {children}
      </section>
      <WebViewer company={company} />
      <div className='fixed bottom-5 right-5'>
        <Link href='/'>
          <button className='w-10 h-10 bg-[#2a2a2a] rounded-full font-bold text-white animate-pulse'>
            X
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Layout;
