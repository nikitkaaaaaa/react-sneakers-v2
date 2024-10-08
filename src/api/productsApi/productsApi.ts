import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IntefraceProducts from "./IntefraceProducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IntefraceProducts[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
