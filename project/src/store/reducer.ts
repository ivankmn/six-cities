import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { ReviewItem } from '../types/review';
import { cityChange, fillPlaces, sorting } from './action';
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';
import getOffersNearby from '../mocks/offers-nearby';
import { SortItems } from '../consts/sort-items';
import { CITIES } from '../consts/cities';

interface MyState {
  currentCity: string;
  placesList: Offer[];
  reviewsList: ReviewItem[];
  offersNearbyList: Offer[];
  currentSorting: string;
}

const offers: Offer[] = getOffers();
const reviews: ReviewItem[] = getReviews();
const offersNearby: Offer[] = getOffersNearby();

const initialState: MyState = {
  currentCity: CITIES[0],
  placesList: offers,
  reviewsList: reviews,
  offersNearbyList: offersNearby,
  currentSorting: SortItems.POPULAR,
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
    })
    .addCase(sorting, (state, action) => {
      const { sortingType } = action.payload;
      state.currentSorting = sortingType;
    });
});

export { reducer };
