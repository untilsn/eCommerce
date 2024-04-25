import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import logger from "redux-logger";
import storeSlice from "./slice/storeSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const reducer = combineReducers({
  auth: authSlice,
  store: storeSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

// export const store = configureStore({
//   reducer,
//   middleware: (gDM) => gDM().concat(logger),
// });
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
