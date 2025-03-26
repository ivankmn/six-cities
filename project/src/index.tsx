import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';
import { Offer } from './types/offer';
import { ReviewType } from './types/review';

const offersList: Offer[] = getOffers();
const reviewsList: ReviewType[] = getReviews();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App offers={offersList} reviews={reviewsList} />
  </React.StrictMode>
);
