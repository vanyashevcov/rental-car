import { useNavigate } from 'react-router-dom';
import s from './CarCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/cars/selectors';
import Loader from '../Loader/Loader';
import { formatMileage } from '@utils';
import { toggleFavorite } from '@redux/favorites/slice';
import { selectFavorites } from '@redux/favorites/selectors';

function CarCard({
  id,
  year,
  brand,
  model,
  type,
  img,
  address,
  rentalPrice,
  rentalCompany,
  mileage,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cityName = address.split(',').splice(1, 1);
  const countryName = address.split(',').splice(2, 2);
  const displayMileage = formatMileage(mileage);
  const favoriteItems = useSelector(selectFavorites);
  const isFavorite = favoriteItems.includes(id);

  const handleViewDetails = id => {
    navigate(`/catalog/${id}`);
  };

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(id));
  };

  if (isLoading) return <Loader />;

  return (
    <div className={s.cardContainer}>
      <div className={s.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={s.carImage} />
        <button 
          className={s.favoriteButton} 
          onClick={handleFavoriteToggle}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <svg className={s.favoriteIconActive}>
              <use href="/sprite.svg#icon-heard-active" />
            </svg>
          ) : (
            <svg className={s.favoriteIcon}>
              <use href="/sprite.svg#icon-heard" />
            </svg>
          )}
        </button>
      </div>
      <div className={s.cardDetails}>
        <div className={s.titleSection}>
          <p>
            {brand}
            <span className={s.modelHighlight}> {model}</span>, {year}
          </p>
          <p>${rentalPrice}</p>
        </div>
        <div className={s.infoSection}>
          <ul className={s.infoRow}>
            <li>{cityName}</li>
            <li>{countryName}</li>
            <li>{rentalCompany}</li>
          </ul>
          <ul className={s.infoRow}>
            <li>{type}</li>
            <li>{displayMileage}</li>
          </ul>
        </div>
      </div>
      <button className={s.readMoreButton} onClick={() => handleViewDetails(id)}>
        Read more
      </button>
    </div>
  );
}

export default CarCard;