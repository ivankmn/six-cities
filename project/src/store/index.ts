import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { api } from '../api/api';

export const store = configureStore({
  reducer: {
    appData: reducer, // тут немного хардкор с именованием получился, это ок?
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// export const store = configureStore({ reducer });
