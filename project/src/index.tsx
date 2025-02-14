import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';
import { Offer } from './types/offer';
import { Review } from './types/review';

const offersList: Offer[] = getOffers();
const reviewsList: Review[] = getReviews();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offersList} reviews={reviewsList} />
  </React.StrictMode>
);
