import { useEffect } from 'react';

type Props = {
  company: string;
  children: JSX.Element;
};

const Logo: React.FC<Props> = ({ company, children }) => {
  let bootSound = '';
  switch (company) {
    case 'general resource':
      bootSound = '/general.mp3';
      break;
    case 'neucom':
      bootSound = '/neucom.mp3';
      break;
    case 'upeo':
      bootSound = '/upeo.mp3';
      break;
    case 'ouroboros':
      bootSound = '/ouroboros.mp3';
      break;
    default:
      break;
  }

  const loadHandler = () => {
    const audio = new Audio(bootSound);
    audio.play();
  };

  useEffect(() => {
    loadHandler();
  });

  return <>{children}</>;
};

export default Logo;
