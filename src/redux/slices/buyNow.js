import { createSlice } from "@reduxjs/toolkit";


const buyNowSlice = createSlice({
  name: "buyNow",
  initialState: [],
  
  reducers: {

    add(state, action) {

      const { product, cartQtyCount } = action?.payload;
      return [{...product, cartQtyCount }];
    },

    clear() {
      return [];
    }
  }
});


export const buyNow = buyNowSlice.actions;
export default buyNowSlice.reducer;