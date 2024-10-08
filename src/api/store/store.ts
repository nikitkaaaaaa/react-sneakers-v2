import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (m) => m().concat(productsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
