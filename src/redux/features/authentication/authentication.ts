import { createSlice } from "@reduxjs/toolkit";
import { getLsAuthToken, setLsAuthToken } from "../../../utils";
import {  encodeString } from "../../../utils/string";

export interface AuthenticationState {
  token: string;
}

const clearState: AuthenticationState = {
  token: ''
};

const initialState: AuthenticationState = {
  token: getLsAuthToken() ?? ''
};

export const authenticationSlice = createSlice({
  name: "authenticaiton",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      const { payload } = action;
      const tokenEncoded = encodeString(payload);

      if(tokenEncoded !== state.token) {
        state.token = tokenEncoded;
        setLsAuthToken(tokenEncoded);
      }

      return state;
    },
    resetToken: (state) => {
      state = clearState
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateToken, resetToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
