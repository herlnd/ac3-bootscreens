import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className='w-full h-4 border-slate-900 border-2  relative max-w-xl overflow-hidden'>
      <div className='w-full h-full bg-white absolute'></div>
    </div>
  );
};

export default ProgressBar;
