import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import InterfacepurchasedProducts from "./InterfacepurchasedProducts";

export const purchasedProductsApi = createApi({
  reducerPath: "purchasedProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    addProductToPurchasedProducts: builder.mutation<
      void,
      InterfacepurchasedProducts
    >({
      query: (body) => ({
        url: "purchasedProducts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddProductToPurchasedProductsMutation } =
  purchasedProductsApi;
