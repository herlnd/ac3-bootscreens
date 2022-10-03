import DataSwallow from '../OSInfo/DataSwallow';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-screen h-screen grid grid-cols-5'>
      <section className='col-start-1 col-span-3 grid grid-cols-5'>
        {children}
      </section>
      <section className='col-start-4 col-span-2'>
        <DataSwallow />
      </section>
    </div>
  );
};

export default Layout;
