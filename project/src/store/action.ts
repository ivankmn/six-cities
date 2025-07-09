import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

const cityChange = createAction<{ city: string }>('city/cityChange');
const fillPlaces = createAction<{ places: Offer[] }>('places/fill');

export { cityChange, fillPlaces };
