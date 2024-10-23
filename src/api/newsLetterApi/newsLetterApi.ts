import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import InerfaceFormNewLeter from "../../componets/forms/newsletterForm/InerfaceFormNewLeter";

export const newsLetterApi = createApi({
  reducerPath: "newsLetterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    addNewsLetter: builder.mutation<void, InerfaceFormNewLeter>({
      query: (body) => ({
        url: "newsLetter",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddNewsLetterMutation } = newsLetterApi;
