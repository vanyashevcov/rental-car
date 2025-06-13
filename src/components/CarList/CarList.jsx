import CarCard from '../CarCard/CarCard';
import s from './CarList.module.css';

function CarList({ cars }) {
  return (
    <div>
      <ul className={s.listContainer}>
        {cars.map((car, index) => (
          <li key={`${car.id}-${index}`}>
            <CarCard {...car} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;