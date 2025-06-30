import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { cityChange, fillPlaces } from './action';

interface MyState {
  currentCity: string;
  placesList: Offer[];
}

const initialState: MyState = {
  currentCity: 'Paris',
  placesList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      const { city } = action.payload;
      state.currentCity = city;
    })
    .addCase(fillPlaces, (state, action) => {
      const { places } = action.payload;
      state.placesList = places;
    });
});

export { reducer };
