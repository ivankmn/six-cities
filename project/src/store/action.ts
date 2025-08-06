import { createAction } from '@reduxjs/toolkit';

const cityChange = createAction<{ city: string }>('city/cityChange');
const sorting = createAction<{ sortingType: string }>('sorting/change');

export { cityChange, sorting };
