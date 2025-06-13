import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const carId = action.payload;
      const existingIndex = state.items.indexOf(carId);
      if (existingIndex === -1) {
        state.items.push(carId);
      } else {
        state.items.splice(existingIndex, 1);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { toggleFavorite } = favoritesSlice.actions;