import GeneralResource from './CompaniesLogos/GeneralResource';
import { useEffect } from 'react';

const Logo = () => {
  const loadHandler = () => {
    const audio = new Audio('/general.mp3');
    audio.play();
  };

  useEffect(() => {
    loadHandler();
  }, []);

  return <GeneralResource />;
};

export default Logo;
