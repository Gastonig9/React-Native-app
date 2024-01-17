import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { auth_url, api_key } from '../../constants/constants';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: auth_url }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: userData,
            }),
        }),
        login: builder.mutation({
            query: (userData) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: userData,
            }),
        })
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
