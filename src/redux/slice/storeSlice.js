import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    products: [],
    wishlistArray: [],
    wishlistLength: null,
  },
  reducers: {
    fetchingProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    displayWishlist: (state, action) => {
      return {
        ...state,
        wishlistArray: action.payload,
      };
    },
    displayWishlistLength: (state, action) => {
      return {
        ...state,
        wishlistLength: action.payload,
      };
    },
  },
});
export const { fetchingProducts, displayWishlist, displayWishlistLength } =
  storeSlice.actions;
export default storeSlice.reducer;
