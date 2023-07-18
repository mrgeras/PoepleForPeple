import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';
import { CityState } from '../type/CityState';

const initialState: CityState = { cities: [], error: '' };

export const citiesInit = createAsyncThunk('cities/init', (id:number) =>
  // api.getCities(countryInput.id)
  api.getCities(id)
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(citiesInit.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.error = '';
      })
      .addCase(citiesInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
