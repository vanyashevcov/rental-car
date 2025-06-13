import { useNavigate } from 'react-router-dom';
import s from './HomePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToGallery = () => {
    navigate('./catalog');
  };

  return (
    <div className={s.heroSection}>
      <div className={s.contentOverlay}>
        <h1 className={s.heroTitle}>Find your perfect rental car</h1>
        <p className={s.heroSubtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={s.heroButton} onClick={handleNavigateToGallery}>
          View Catalog
        </button>
      </div>
    </div>
  );
}

export default HomePage;