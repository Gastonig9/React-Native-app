import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_base } from "../../constants/constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: url_base }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "productos.json",
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImage/${localId}.json`,
        method: "PUT",
        body: { image },
      }),
      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
  }),
});

export const { useGetProductsQuery, usePostProfileImageMutation, useGetProfileImageQuery } = productApi;
