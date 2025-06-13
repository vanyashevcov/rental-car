import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const brandsReducer = brandsSlice.reducer;