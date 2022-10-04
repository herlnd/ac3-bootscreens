import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
    </div>
  );
};

export default ProgressBar;
