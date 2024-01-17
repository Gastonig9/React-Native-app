import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import authReducer from "../features/auth/authSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from "./services/productService";
import { authApi } from "./services/authService";

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch)
