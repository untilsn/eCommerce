import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authModal: false,
  },
  reducers: {
    openModalAuth: (state, action) => {
      return {
        ...state,
        authModal: action.payload,
      };
    },
  },
});
export const { openModalAuth } = authSlice.actions;
export default authSlice.reducer;
