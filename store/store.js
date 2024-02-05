import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice"
import authReducer from "../features/auth/authSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from "./services/productService";
import { authApi } from "./services/authService";
import { cartApi } from "./services/cartService"; 

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, authApi.middleware, cartApi.middleware),
});

setupListeners(store.dispatch);
