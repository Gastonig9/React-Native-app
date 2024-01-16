import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from "./services/productService";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch)
