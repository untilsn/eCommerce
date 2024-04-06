import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import logger from "redux-logger";

const reducer = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
