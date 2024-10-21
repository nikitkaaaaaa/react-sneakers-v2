import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { consultationMessageApi } from "../consultationMessageApi/consultationMessageApi";
import { newsLetterApi } from "../newsLetterApi/newsLetterApi";
import { cartApi } from "../cartApi/cartApi";
import { purchasedProductsApi } from "../purchasedProductsApi/purchasedProducts";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [consultationMessageApi.reducerPath]: consultationMessageApi.reducer,
    [newsLetterApi.reducerPath]: newsLetterApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [purchasedProductsApi.reducerPath]: purchasedProductsApi.reducer,
  },
  middleware: (m) =>
    m().concat(
      productsApi.middleware,
      consultationMessageApi.middleware,
      newsLetterApi.middleware,
      cartApi.middleware,
      purchasedProductsApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
