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
    setCustomAnimation(styles.loginAnimation);
  };

  const removeAnimation = () => {
    setCustomAnimation('');
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={animationHandler}
      onMouseLeave={removeAnimation}
    >
      <div className='text-2xl font-extrabold'>{companyName}</div>
      <Link href={companyLink}>
        <button className={`${styles.login} ${customAnimation}`}>Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;
