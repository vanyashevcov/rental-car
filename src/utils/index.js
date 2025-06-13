export const formatMileage = mileage => {
  return mileage.toLocaleString('en-US').replace(/,/g, ' ') + ' km';
};

export const createBrandOptions = brands => {
  return brands.map(brand => ({
    value: brand,
    label: brand,
  }));
};