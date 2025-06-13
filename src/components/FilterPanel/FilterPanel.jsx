import Select from 'react-select';
import s from './FilterPanel.module.css';
import { Field, Form, Formik } from 'formik';
import { customSelectStyles } from '@utils/CustomSelectStyles';
import { PriceDisplay } from '@utils/PriceDisplay';
import { useDispatch } from 'react-redux';
import { updateFilters } from '@redux/filters/slice';
import { createBrandOptions } from '@utils/index';
import { priceOptions } from '@constants/constants';
import { useState } from 'react';

const filterInitialValues = {
  selectedBrand: '',
  selectedPrice: '',
  minMileage: '',
  maxMileage: '',
};

function FilterPanel({ availableBrands }) {
  const dispatch = useDispatch();
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const brandOptions = createBrandOptions(availableBrands);

  const handleFilterSubmit = values => {
    const filterData = {
      brand: values.selectedBrand?.value || null,
      rentalPrice: values.selectedPrice?.value || null,
      minMileage: values.minMileage || null,
      maxMileage: values.maxMileage || null,
    };

    const cleanedFilters = Object.fromEntries(
      Object.entries(filterData).filter(value => value !== null && value !== '')
    );

    dispatch(updateFilters(cleanedFilters));
  };

  const CustomDropdownIndicator = ({ isOpen }) => (
    <div className={s.dropdownIndicator}>
      <svg className={`${s.arrowIcon} ${isOpen ? s.rotated : ''}`}>
        <use href="/sprite.svg#icon-arrow-down" />
      </svg>
    </div>
  );

  return (
    <div className={s.panelContainer}>
      <Formik
        initialValues={filterInitialValues}
        onSubmit={handleFilterSubmit}
        enableReinitialize
      >
        {({ setFieldValue, handleSubmit }) => (
          <Form className={s.filterForm} onSubmit={handleSubmit}>
            <div className={s.selectGroup}>
              <label className={s.filterLabel}>Car brand</label>
              <div className={s.selectWrapper}>
                <Select
                  options={brandOptions}
                  styles={customSelectStyles}
                  placeholder="Choose a brand"
                  onChange={option => setFieldValue('selectedBrand', option)}
                  onMenuOpen={() => setIsBrandOpen(true)}
                  onMenuClose={() => setIsBrandOpen(false)}
                  isClearable={false}
                />
                <CustomDropdownIndicator isOpen={isBrandOpen} />
              </div>
            </div>
            <div className={s.selectGroup}>
              <label className={s.filterLabel}>Price/ 1 hour</label>
              <div className={s.selectWrapper}>
                <Select
                  options={priceOptions}
                  styles={customSelectStyles}
                  placeholder="Choose a price"
                  onChange={option => setFieldValue('selectedPrice', option)}
                  onMenuOpen={() => setIsPriceOpen(true)}
                  onMenuClose={() => setIsPriceOpen(false)}
                  components={{ SingleValue: PriceDisplay }}
                  getOptionLabel={option => `${option.value}`}
                  isClearable={false}
                />
                <CustomDropdownIndicator isOpen={isPriceOpen} />
              </div>
            </div>
            <div>
              <label className={s.filterLabel}>Car mileage / km</label>
              <div className={s.rangeInputs}>
                <div className={s.fromWrapper}>
                  <span className={s.fromLabel}>From</span>
                  <Field
                    name="minMileage"
                    className={s.fromField}
                    type="number"
                    min="0"
                  />
                </div>
                <div className={s.toWrapper}>
                  <span className={s.toLabel}>To</span>
                  <Field
                    name="maxMileage"
                    className={s.toField}
                    type="number"
                    min="0"
                  />
                </div>
              </div>
            </div>
            <button className={s.searchButton} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FilterPanel;
