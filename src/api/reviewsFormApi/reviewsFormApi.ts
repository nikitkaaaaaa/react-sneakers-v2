import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import InterfaceReviewsForm from "../../componets/forms/reviewsForm/InterfaceReviewsForm";

export const reviewsFormApi = createApi({
  reducerPath: "reviewsFormApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    addReviews: builder.mutation<void, InterfaceReviewsForm>({
      query: (body) => ({
        url: "reviewsForm",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddReviewsMutation } = reviewsFormApi;
