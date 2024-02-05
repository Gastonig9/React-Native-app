// cartService.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_base } from "../../constants/constants";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_base }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "cart.json",
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: `cart.json`,
        method: "PATCH",
        body: product,
      }),
    }),
    removeProductToCart: builder.mutation({
      query: (productId) => ({
        url: `cart/${productId}.json`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useRemoveProductToCartMutation } = cartApi;
