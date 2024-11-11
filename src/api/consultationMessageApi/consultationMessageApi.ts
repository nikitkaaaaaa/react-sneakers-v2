import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import InerfaceFormConsultation from "../../componets/forms/consultationForm/InerfaceFormConsultation";

export const consultationMessageApi = createApi({
  reducerPath: "consultationMessageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://65e97ddfc7f16999.mokky.dev/" }),
  endpoints: (builder) => ({
    addConsultationMessageApi: builder.mutation<void, InerfaceFormConsultation>(
      {
        query: (body) => ({
          url: "consultationMessage",
          method: "POST",
          body,
        }),
      }
    ),
  }),
});

export const { useAddConsultationMessageApiMutation } = consultationMessageApi;
