import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBrands = createAsyncThunk(
  'brands/fetchAllBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);