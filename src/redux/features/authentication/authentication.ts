import { createSlice } from "@reduxjs/toolkit";
import { clearLsAuthToken, getLsAuthToken, setLsAuthToken } from "../../../utils";
import { encodeString } from "../../../utils/string";
import { coreApi } from "../../services/core/core";

export interface AuthenticationState {
  token: string;
}

const clearState: AuthenticationState = {
  token: "",
};

const initialState: AuthenticationState = {
  token: getLsAuthToken() ?? "",
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateAuthToken: (state, action) => {
      const { payload } = action;
      const tokenEncoded = encodeString(payload);

      if (tokenEncoded !== state.token) {
        state.token = tokenEncoded;
        setLsAuthToken(tokenEncoded);
      }

      return state;
    },
    clearAuthToken: (state) => {
      state = clearState;
      clearLsAuthToken();
      
      return state;
    },
  },
  extraReducers: (builder) => {
    // When token is returned from api, update it automatically
    // We *could* handle this in React, but this is a global solution
    builder.addMatcher(coreApi.endpoints.authenticate.matchFulfilled, (state, action) => {
    const { payload } = action;
    const { authenticated, authToken } = payload;
    const tokenEncoded = encodeString(authToken);
    
    if(authenticated) {
      state.token = tokenEncoded;
      setLsAuthToken(tokenEncoded);
    }
    return state;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateAuthToken, clearAuthToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
