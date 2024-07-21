// imports that are needed
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

//Here we are configuring the API slice for use with Redux Toolkit's RTK Query.
export const api = createApi({
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL as string,
  }),
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

//These are used in React components to fetch data from the server.
export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} = api;
