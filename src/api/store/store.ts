import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { consultationMessageApi } from "../consultationMessageApi/consultationMessageApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [consultationMessageApi.reducerPath]: consultationMessageApi.reducer,
  },
  middleware: (m) =>
    m().concat(productsApi.middleware, consultationMessageApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
