import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { api } from '../api/api';

export const store = configureStore({
  reducer: {
    appData: reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
