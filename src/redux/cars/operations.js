import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl, PAGINATION_LIMIT } from '@constants/constants';

axios.defaults.baseURL = baseUrl;

export const fetchCars = createAsyncThunk(
  'cars/fetchAllCars',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: PAGINATION_LIMIT,
      };

      if (filters.brand) params.brand = filters.brand;
      if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
      if (filters.minMileage) params.minMileage = filters.minMileage;
      if (filters.maxMileage) params.maxMileage = filters.maxMileage;

      const response = await axios.get('/cars', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCar',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);