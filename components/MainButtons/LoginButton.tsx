import styles from './LoginButton.module.css';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  company: string;
};

const LoginButton: React.FC<Props> = ({ company }) => {
  const [customAnimation, setCustomAnimation] = useState('');

  let companyLink = '';
  let companyName = '';

  switch (company) {
    case 'general resource':
      companyLink = '/general-resource';
      companyName = 'General Resource';
      break;
    case 'neucom':
      companyLink = '/neucom';
      companyName = 'Neucom';
      break;
    case 'upeo':
      companyLink = '/upeo';
      companyName = 'Upeo';
      break;
    case 'ouroboros':
      companyLink = '/ouroboros';
      companyName = 'Ouroboros';
      break;
    default:
      break;
  }

  const animationHandler = () => {
    if (customAnimation === '') {
      setCustomAnimation(styles.loginAnimation);
    } else {
      setCustomAnimation('');
    }
  };

  return (
    <div
      className={`bg-[#f0f0e2] h-fit border-8 rounded-[1.25rem] border-black flex justify-between items-center ${styles.container}`}
      onMouseEnter={animationHandler}
      onMouseLeave={animationHandler}
    >
      <div className='pl-8 text-xl font-extrabold md:text-2xl'>
        {companyName}
      </div>
      <Link href={companyLink}>
        <button
          className={`bg-black text-[#00bdcb] rounded-tl-0 rounded-tr-lg rounded-br-lg rounded-bl-0 font-bold px-8 py-2 h-full ${styles.login} ${customAnimation}`}
        >
          Login
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;
