import s from './PageContainer.module.css';

function PageContainer({ children }) {
  return <div className={s.pageWrapper}>{children}</div>;
}

export default PageContainer;