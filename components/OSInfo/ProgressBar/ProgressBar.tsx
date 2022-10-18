import styles from './ProgressBar.module.css';

interface companyType {
  company: string;
}

const ProgressBar = ({ company }: companyType) => {
  return (
    <div
      className={
        company === 'ouroboros' ? styles.containerOuroboros : styles.container
      }
    >
      <div
        className={company === 'ouroboros' ? styles.barOuroboros : styles.bar}
      ></div>
    </div>
  );
};

export default ProgressBar;
