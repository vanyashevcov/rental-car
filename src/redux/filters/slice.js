import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  rentalPrice: null,
  minMileage: '',
  maxMileage: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters(state, action) {
      return { ...state, ...action.payload };
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { updateFilters, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;