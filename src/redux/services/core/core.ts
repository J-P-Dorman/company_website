import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthCheckResponse, UserDataResponse } from "./types";

// This would come from the api in a real scenario
import defaultImage from "../../../assets/user.svg";

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/" }),
  endpoints: (builder) => ({
    authCheck: builder.query<AuthCheckResponse, string>({
      query: (authToken) => `v2/pokemon/${authToken}`,
      transformResponse: (_returnValue, _meta, arg) => {
        if (arg === "bulbasaur") return { authenticated: true };
        return { authenticated: false };
      },
    }),
    userData: builder.query<UserDataResponse, string>({
      query: (authToken) => `v2/pokemon/${authToken}`,
      transformResponse: () => {
        return {
          image: defaultImage,
          name: "Steven Spielberg",
          userType: "premium",
        };
      },
    }),
  }),
});

export const { useAuthCheckQuery, useUserDataQuery } = coreApi;
