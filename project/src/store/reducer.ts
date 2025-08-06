import { createReducer } from '@reduxjs/toolkit';
import { cityChange, sorting } from './action';
import { SortItems } from '../consts/sort-items';
import { CITIES } from '../consts/cities';

interface MyState {
  currentCity: string;
  currentSorting: string;
}

const initialState: MyState = {
  currentCity: CITIES[0],
  currentSorting: SortItems.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      const { city } = action.payload;
      state.currentCity = city;
    })
    .addCase(sorting, (state, action) => {
      const { sortingType } = action.payload;
      state.currentSorting = sortingType;
    });
});

export { reducer };
