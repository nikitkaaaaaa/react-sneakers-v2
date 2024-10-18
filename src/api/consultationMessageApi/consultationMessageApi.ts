import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import InterfaceForm from "../../componets/forms/consultationForm/InerfaceForm";

export const consultationMessageApi = createApi({
  reducerPath: "consultationMessageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    addConsultationMessageApi: builder.mutation<void, InterfaceForm>({
      query: (body) => ({
        url: "/consultationMessage",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddConsultationMessageApiMutation } = consultationMessageApi;
