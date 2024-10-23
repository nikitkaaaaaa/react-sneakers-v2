import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "../productsApi/productsApi";
import { consultationMessageApi } from "../consultationMessageApi/consultationMessageApi";
import { newsLetterApi } from "../newsLetterApi/newsLetterApi";
import { cartApi } from "../cartApi/cartApi";
import { favoritesProductsApi } from "../favoritesProductsApi/favoritesProductsApi";
import { purchasedProductsApi } from "../purchasedProductsApi/purchasedProductsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [consultationMessageApi.reducerPath]: consultationMessageApi.reducer,
    [newsLetterApi.reducerPath]: newsLetterApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [purchasedProductsApi.reducerPath]: purchasedProductsApi.reducer,
    [favoritesProductsApi.reducerPath]: favoritesProductsApi.reducer,
  },
  middleware: (m) =>
    m().concat(
      productsApi.middleware,
      consultationMessageApi.middleware,
      newsLetterApi.middleware,
      cartApi.middleware,
      purchasedProductsApi.middleware,
      favoritesProductsApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
