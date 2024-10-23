import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IntefraceProducts from "./IntefraceProducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      IntefraceProducts[],
      {
        title?: string;
        category?: string;
        gender?: string[];
        brands?: string[];
        seasons?: string[];
        priceTo?: string;
        priceFrom?: string;
        choiseProducts?: string;
      }
    >({
      query: ({
        title,
        gender,
        brands,
        seasons,
        priceTo,
        priceFrom,
        choiseProducts,
        category,
      }) => {
        const params = new URLSearchParams();

        if (category) params.append("category", category);

        if (title) params.append("title", `*${title}*`);

        if (choiseProducts) {
          params.append("sortBy", choiseProducts);
        }

        if (gender)
          gender.forEach((item) => {
            params.append("gender[]", item);
          });

        if (seasons)
          seasons.forEach((item) => {
            params.append("season[]", item);
          });

        if (brands) {
          brands.forEach((item) => {
            params.append("brand[]", item);
          });
        }

        if (priceFrom) params.append("price[from]", priceFrom);
        if (priceTo) params.append("price[to]", priceTo);

        return `products?${params}`;
      },
    }),

    getProductId: builder.query<IntefraceProducts, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductIdQuery } = productsApi;
