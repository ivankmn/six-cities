import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  CardsCount: 5,
  PlaceCount: '312',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsCount = {Setting.CardsCount} placeCount = {Setting.PlaceCount}/>
  </React.StrictMode>,
);
