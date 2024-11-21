import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  
  reducers: {

    add(state, action) {

      const product = action.payload;
      const existingProduct = state.find(item => item.id == product.id);

      if (existingProduct) {
        existingProduct.cartQtyCount += 1;
      }
      else {
        state.push({ ...product, cartQtyCount: 1 });
      }
    },

    incrementQty(state, action) {

      const { productId, cartQtyCount } = action.payload;
      const existingProduct = state.find(item => item.id == productId);

      if (existingProduct) {
        existingProduct.cartQtyCount = cartQtyCount;
      }
    },

    decrementQty(state, action) {

      const { productId, cartQtyCount } = action.payload;
      const productIndex = state.findIndex(item => item.id == productId);

      if (productIndex >= 0) {
        const existingProduct = state[productIndex];

        if (existingProduct.cartQtyCount > 2) {
          existingProduct.cartQtyCount = cartQtyCount;
        }
        else {
          const products = state.filter(item => item.id != productId);
          return products;
        }
      }
    },

    remove(state, action) {

      const productId = action.payload;
      const products = state.filter(item => item.id != productId);
      return products;
    },

    clear(state, action) {
      
      return [];
    }
  }
});


export const cart = cartSlice.actions;
export default cartSlice.reducer;