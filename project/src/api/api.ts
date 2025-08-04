import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Offer } from '../types/offer';

const BACKEND_URL = 'https://12.react.htmlacademy.pro/six-cities/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (builder) => ({
    getLocations: builder.query<Offer[], void>({
      query: () => 'hotels',
    }),
  }),
});

export const { useGetLocationsQuery } = api;
