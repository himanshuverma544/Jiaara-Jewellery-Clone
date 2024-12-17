import { createSlice } from "@reduxjs/toolkit";


const buyNowSlice = createSlice({
  name: "buyNow",
  initialState: {},
  
  reducers: {

    add(state, action) {

      const { product, qtyCount } = action?.payload;
      return ({...product, qtyCount });
    },

    clear() {
      return {};
    }
  }
});


export const buyNow = buyNowSlice.actions;
export default buyNowSlice.reducer;