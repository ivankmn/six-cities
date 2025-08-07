import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Offer } from '../types/offer';
import { ReviewItem } from '../types/review';

const BACKEND_URL = 'https://12.react.htmlacademy.pro/six-cities';

interface LoginResponse {
  token: string;
  user: { id: string; email: string };
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    getLocations: builder.query<Offer[], void>({
      query: () => '/hotels',
    }),
    getLocationItem: builder.query<Offer[], number>({
      query: (hotelId) => `/hotels/${hotelId}`,
    }),
    getReviews: builder.query<ReviewItem[], number>({
      query: (hotelId) => `/comments/${hotelId}`,
    }),
    getLocationsNearby: builder.query<Offer[], number>({
      query: (hotelId) => `/hotels/${hotelId}/nearby`,
    }),
    getMe: builder.query<{ email: string; password: string }, void>({
      query: () => '/login',
      providesTags: ['Auth'],
    }),
    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useGetLocationsQuery, useGetReviewsQuery, useGetLocationsNearbyQuery, useGetMeQuery, useLoginMutation } =
  api;
