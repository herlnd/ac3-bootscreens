import WebViewer from '../OSInfo/WebViewer';
import Link from 'next/link';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className='w-screen h-screen grid grid-cols-5'>
      <section className='col-start-1 col-span-3 grid grid-cols-5'>
        {children}
      </section>
      <WebViewer />
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
