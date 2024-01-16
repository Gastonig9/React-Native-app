import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url_base } from '../../constants/constants'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: url_base}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'productos.json'
        }),
    })
})


export const { useGetProductsQuery } = productApi