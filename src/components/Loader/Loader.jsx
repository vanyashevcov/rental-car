import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.spinnerContainer}>
      <div className={s.spinner}>
        <div className={s.spinnerRing}></div>
        <div className={s.spinnerRing}></div>
        <div className={s.spinnerRing}></div>
        <div className={s.spinnerRing}></div>
      </div>
    </div>
  );
}