import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";

const reducer = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer,
});
