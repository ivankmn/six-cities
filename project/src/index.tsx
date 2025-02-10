import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import { Offers } from './types/offer';
import { Reviews } from './types/reviews';

const offersList: Offers[] = offers;
const reviewsList: Reviews[] = reviews;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App
      offers={offersList}
      reviews={reviewsList}
    />
  </React.StrictMode>
);
