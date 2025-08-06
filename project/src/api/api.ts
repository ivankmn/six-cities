import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Offer } from '../types/offer';
import { ReviewItem } from '../types/review';

const BACKEND_URL = 'https://12.react.htmlacademy.pro/six-cities/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (builder) => ({
    getLocations: builder.query<Offer[], void>({
      query: () => 'hotels',
    }),
    getLocationItem: builder.query<Offer[], number>({
      query: (hotelId) => `hotels/${hotelId}`,
    }),
    getReviews: builder.query<ReviewItem[], number>({
      query: (hotelId) => `/comments/${hotelId}`,
    }),
    getLocationsNearby: builder.query<Offer[], number>({
      query: (hotelId) => `hotels/${hotelId}/nearby/`,
    }),
  }),
});

export const { useGetLocationsQuery, useGetReviewsQuery, useGetLocationsNearbyQuery } = api;
