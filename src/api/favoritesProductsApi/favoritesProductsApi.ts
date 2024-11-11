import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import InerfaceFavorites from "./InerfaceFavorites";

export const favoritesProductsApi = createApi({
  reducerPath: "favoritesProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavoritesProducts: builder.query<InerfaceFavorites[], void>({
      query: () => "favoritesProducts",
      providesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    addProductToFavorites: builder.mutation<void, InerfaceFavorites>({
      query: (body) => ({
        url: "favoritesProducts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    removeProductInFavorites: builder.mutation<void, string>({
      query: (id) => ({
        url: `favoritesProducts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFavoritesProductsQuery,
  useAddProductToFavoritesMutation,
  useRemoveProductInFavoritesMutation,
} = favoritesProductsApi;
