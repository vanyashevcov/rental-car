import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';

const initialState = {
  items: [],
  currentCar: null,
  totalPages: 0,
  totalCars: 0,
  currentPage: 1,
  error: null,
  loading: false,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCars: state => {
      state.items = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.totalCars = 0;
    },
    resetCurrentCar: state => {
      state.currentCar = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalPages, totalCars, page } = action.payload;
        if (page === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }
        state.totalPages = totalPages;
        state.totalCars = totalCars;
        state.currentPage = page;
        state.loading = false;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.loading = false;
      })
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { clearCars, resetCurrentCar } = carsSlice.actions;