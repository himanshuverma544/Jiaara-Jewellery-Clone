import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  
  reducers: {

    add(state, action) {

      const product = action.payload;
        state.push({ ...product, isWishlist: true });
    },

    remove(state, action) {

      const productId = action.payload;
      const products = state.filter(item => item.id != productId);
      return products;
    },

    clear() {
      return [];
    }
  }
});


export const wishlist = wishlistSlice.actions;
export default wishlistSlice.reducer;