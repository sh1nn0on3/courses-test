import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import courseSlice from "./courseSlice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  course: courseSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
console.log("🚀 ~ file: store.jsx:31 ~ persistedReducer:", persistedReducer);

// export default configureStore({});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

