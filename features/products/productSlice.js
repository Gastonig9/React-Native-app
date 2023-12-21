import { createSlice } from '@reduxjs/toolkit';
import { productos } from '../../constants/constants';

const initialState = {
  value: {
    products: productos,
    productCategory: [],
    productDetail: {},
    searchedProducts: [],
  },
};

export const productSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    handleSearch: (state, action) => {
      const searchTerm = action.payload;
      state.value.searchedProducts = state.value.products.filter((p) =>
        p.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    handleProductDetail: (state, action) => {
      const productTitle = action.payload;
      state.value.productDetail = state.value.products.find((p) => p.titulo === productTitle)
    },
    handleCategory: (state, action) => {
      const category = action.payload;
      if (category === "Todos") {
        state.value.productCategory = state.value.products;
      } else {
        state.value.productCategory = state.value.products.filter((p) => p.categoria === category);
      }
    }    
  },
});

export const { handleSearch, handleProductDetail, handleCategory } = productSlice.actions;
export default productSlice.reducer;
