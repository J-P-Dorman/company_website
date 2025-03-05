import { createSlice } from "@reduxjs/toolkit";

export interface TestState {
  a: boolean;
  b: boolean;
  c: boolean;
}

const initialState: TestState = {
  a: false,
  b: false,
  c: false,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testChange: (state) => {
      state.a = true;
      return state;
    },
    testReset: (state) => {
      state = initialState;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { testChange, testReset } = testSlice.actions;

export default testSlice.reducer;
