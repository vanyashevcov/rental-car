import { formatMileage } from '@utils';
import s from './CarInfo.module.css';

function CarInfo({
  car: {
    year,
    brand,
    model,
    rentalConditions,
    id,
    address,
    rentalPrice,
    type,
    fuelConsumption,
    engineSize,
    mileage,
    description,
    functionalities,
  },
}) {
  const carId = id.replace(/\D/g, '');
  const displayId = carId.slice(-4);
  const displayMileage = formatMileage(mileage);

  return (
    <div className={s.infoContainer}>
      <div className={s.header}>
        <h1 className={s.carTitle}>
          {brand} {model}, {year}
        </h1>
        <span className={s.carId}>Id: {displayId}</span>
      </div>
      
      <div className={s.locationPrice}>
        <div className={s.locationInfo}>
          <svg className={s.locationIcon}>
            <use href="/sprite.svg#icon-map" />
          </svg>
          <span>{address}</span>
        </div>
        <span className={s.mileageInfo}>Mileage: {displayMileage}</span>
      </div>
      
      <div className={s.priceDisplay}>${rentalPrice}</div>
      
      <p className={s.description}>{description}</p>
      
      <div className={s.section}>
        <h3 className={s.sectionTitle}>Rental Conditions:</h3>
        <ul className={s.conditionsList}>
          {rentalConditions.map((condition, index) => (
            <li key={`condition-${index}`} className={s.conditionItem}>
              <svg className={s.checkIcon}>
                <use href="/sprite.svg#icon-check" />
              </svg>
              <span>{condition}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={s.section}>
        <h3 className={s.sectionTitle}>Car Specifications:</h3>
        <div className={s.specsList}>
          <div className={s.specItem}>
            <svg className={s.specIcon}>
              <use href="/sprite.svg#icon-calendar" />
            </svg>
            <span>Year: {year}</span>
          </div>
          <div className={s.specItem}>
            <svg className={s.specIcon}>
              <use href="/sprite.svg#icon-car" />
            </svg>
            <span>Type: {type}</span>
          </div>
          <div className={s.specItem}>
            <svg className={s.specIcon}>
              <use href="/sprite.svg#icon-fuel-pump" />
            </svg>
            <span>Fuel Consumption: {fuelConsumption}</span>
          </div>
          <div className={s.specItem}>
            <svg className={s.specIcon}>
              <use href="/sprite.svg#icon-engine" />
            </svg>
            <span>Engine Size: {engineSize}</span>
          </div>
        </div>
      </div>
      
      <div className={s.section}>
        <h3 className={s.sectionTitle}>Accessories and functionalities:</h3>
        <ul className={s.featuresList}>
          {functionalities.map((feature, index) => (
            <li key={`feature-${index}`} className={s.featureItem}>
              <svg className={s.checkIcon}>
                <use href="/sprite.svg#icon-check" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CarInfo;