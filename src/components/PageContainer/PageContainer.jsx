import styles from './PageContainer.module.css';

function PageContainer({ children }) {
  return <div className={styles.pageWrapper}>{children}</div>;
}

export default PageContainer;