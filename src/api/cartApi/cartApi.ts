import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import InerfaceCart from "./InerfaceCart";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getProductsCart: builder.query<InerfaceCart[], void>({
      query: () => "/cart",
      providesTags: [{ type: "Cart", id: "LIST" }],
    }),

    addProductToCart: builder.mutation<InerfaceCart, InerfaceCart>({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),

    removeProductInCart: builder.mutation<void, string>({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),

    addOrRemoveOneProductToCart: builder.mutation<
      void,
      { id: string; size: number; price: number; count: number }
    >({
      query: ({ id, size, price, count }) => ({
        url: `cart/${id}`,
        method: "PATCH",
        body: { id, size, price, count },
      }),
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProductsCartQuery,
  useAddProductToCartMutation,
  useRemoveProductInCartMutation,
  useAddOrRemoveOneProductToCartMutation,
} = cartApi;
