import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AuthCheckResponse,
  AuthenticatePayload,
  AuthenticateResponse,
  LogOutPayload,
  LogOutResponse,
  UserDataResponse,
} from "./types";

// This would come from the api in a real scenario
import defaultImage from "../../../assets/user.svg";

export const defaultUserData = {
  image: "",
  name: "-",
  userType: "standard",
}

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/" }),
  tagTypes: ["Authentication"],
  endpoints: (builder) => ({
    // Use an authentication token to query the REST api
    // If successful, the user's login is valid and further
    // queries to the api should theoretically work, meaning
    // we can safely show the user they are logged in
    authCheck: builder.query<AuthCheckResponse, string>({
      query: (authToken) => `v2/pokemon/${authToken}`,
      providesTags: ["Authentication"],
      transformResponse: (_returnValue, _meta, arg) => {
        if (arg === "bulbasaur") return { authenticated: true };
        return { authenticated: false };
      },
    }),

    // This is where we would take a username and password
    // Then try to use them to log in via a REST api
    // To demonstrate we'll just ping any api and say the credentials work
    authenticate: builder.mutation<AuthenticateResponse, AuthenticatePayload>({
      query: () => `v2/pokemon/bulbasaur`,
      invalidatesTags: ["Authentication"],
      transformResponse: () => {
        return { authenticated: true, authToken: "bulbasaur" };
      },
    }),

    // Ask the back end to invalidate the auth token and
    // locally invalidate any successful login state
    invalidateAuth: builder.mutation<LogOutResponse, LogOutPayload>({
      query: () => `v2/pokemon/bulbasaur`,
      invalidatesTags: ["Authentication"],
      transformResponse: () => {
        return { success: true };
      },
    }),

    // Get information about the currently logged in user
    userData: builder.query<UserDataResponse, string>({
      query: (authToken) => `v2/pokemon/${authToken}`,
      providesTags: ["Authentication"],
      transformResponse: (_returnValue, _meta, authToken) => {
 
        if(authToken === '') return defaultUserData;

        return {
          image: defaultImage,
          name: "Steven Spielberg",
          userType: "premium",
        };
      },
    }),
  }),
});

export const {
  useAuthCheckQuery,
  useUserDataQuery,
  useAuthenticateMutation,
  useInvalidateAuthMutation,
} = coreApi;
