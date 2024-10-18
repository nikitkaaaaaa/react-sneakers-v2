import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { consultationMessageApi } from "../consultationMessageApi/consultationMessageApi";
import { newsLetterApi } from "../newsLetterApi/newsLetterApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [consultationMessageApi.reducerPath]: consultationMessageApi.reducer,
    [newsLetterApi.reducerPath]: newsLetterApi.reducer,
  },
  middleware: (m) =>
    m().concat(
      productsApi.middleware,
      consultationMessageApi.middleware,
      newsLetterApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
