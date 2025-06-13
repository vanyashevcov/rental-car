import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '@redux/cars/operations';
import {
  selectCars,
  selectCurrentPage,
  selectTotalPages,
} from '@redux/cars/selectors';
import CarList from '@components/CarList/CarList';
import FilterPanel from '@components/FilterPanel/FilterPanel';
import s from './CarCatalog.module.css';
import { selectFilters } from '@redux/filters/selectors';
import { clearCars } from '@redux/cars/slice';
import { fetchBrands } from '@redux/brands/operations';
import { selectBrands } from '@redux/brands/selectors';
import Loader from '@components/Loader/Loader';
import { selectIsLoading } from '@redux/cars/selectors';

function CarCatalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const activeFilters = useSelector(selectFilters);
  const availableBrands = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(clearCars());
    dispatch(fetchCars({ page: 1, filters: activeFilters }));
    dispatch(fetchBrands());
  }, [dispatch, activeFilters]);

  const handleLoadMore = () => {
    const nextPage = Number(currentPage || 1) + 1;
    dispatch(fetchCars({ page: nextPage, filters: activeFilters }));
  };

  if (isLoading || !cars) return <Loader />;

  return (
    <div className={s.catalogContainer}>
      <FilterPanel availableBrands={availableBrands} />
      <CarList cars={cars} />
      {!isLoading && currentPage < totalPages && (
        <button className={s.loadMoreButton} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

export default CarCatalog;