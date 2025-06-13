import { useParams } from 'react-router-dom';
import CarInfo from '@components/CarInfo/CarInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarById } from '@redux/cars/operations';
import { selectCurrentCar, selectIsLoading } from '@redux/cars/selectors';
import { resetCurrentCar } from '@redux/cars/slice';
import s from './CarDetailInfo.module.css';
import Loader from '@components/Loader/Loader';
import BookingForm from '@components/BookingForm/BookingForm';

function CarDetailInfo() {
  const { id: carId } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carId) {
      dispatch(fetchCarById(carId));
    }

    return () => {
      dispatch(resetCurrentCar());
    };
  }, [dispatch, carId]);

  const currentCar = useSelector(selectCurrentCar);

  if (isLoading || !currentCar) return <Loader />;
  
  return (
    <div className={s.detailsContainer}>
      <div className={s.leftColumn}>
        <img 
          src={currentCar.img} 
          alt={`${currentCar.brand} ${currentCar.model}`} 
          className={s.carImage} 
        />
        <BookingForm />
      </div>
      <CarInfo car={currentCar} />
    </div>
  );
}

export default CarDetailInfo;