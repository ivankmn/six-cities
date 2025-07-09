import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { ReviewItem } from '../types/review';
import { cityChange, fillPlaces } from './action';
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';
import getOffersNearby from '../mocks/offers-nearby';

interface MyState {
  currentCity: string;
  placesList: Offer[];
  reviewsList: ReviewItem[];
  offersNearbyList: Offer[];
}

const offers: Offer[] = getOffers();
const reviews: ReviewItem[] = getReviews();
const offersNearby: Offer[] = getOffersNearby();

const initialState: MyState = {
  currentCity: 'Paris',
  placesList: offers,
  reviewsList: reviews,
  offersNearbyList: offersNearby,
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
