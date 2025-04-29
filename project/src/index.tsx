import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';
import { Offer } from './types/offer';
import { ReviewItem } from './types/review';
import getOffersNearby from './mocks/offers-nearby';

const offersList: Offer[] = getOffers();
const reviewsList: ReviewItem[] = getReviews();
const offersNearbyList: Offer[] = getOffersNearby();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offersList} reviews={reviewsList} offersNearby={offersNearbyList} />
  </React.StrictMode>
);
