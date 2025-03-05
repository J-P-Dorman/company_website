import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthCheckResponse } from "./types";

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/" }),
  endpoints: (builder) => ({
    authCheck: builder.query<AuthCheckResponse, string>({
      query: (authToken) => `v2/pokemon/${authToken}`,
      transformResponse: (_returnValue, _meta, arg) => {
        if(arg === 'bulbasaur') return { authenticated: true };
        return { authenticated: false };
      },
    }),
  }),
});

export const { useAuthCheckQuery } = coreApi;
