import { createSlice } from "@reduxjs/toolkit";
import { productos } from "../../constants/constants";

const initialState = {
  value: {
    user: "",
    items: [],
    total: null,
  },
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.value.items.find((prod) => prod.id === action.payload.id)
      if (findProduct) {
        findProduct.quantity++;
      } else {
        state.value.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      const productIndex = state.value.items.findIndex((prod) => prod.id === productIdToRemove);

      if (productIndex !== -1) {
        // Utilizando el método slice de immer para eliminar el producto del array
        state.value.items = state.value.items.slice(0, productIndex).concat(state.value.items.slice(productIndex + 1));
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
