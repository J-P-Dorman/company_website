import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  visible: boolean;
}

const initialState: UiState = {
  visible: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLogin: (state, action) => {
      const { payload } = action;

      state.visible = payload;
      return state;
    },
  },
});

export const { toggleLogin } = uiSlice.actions;

export default uiSlice.reducer;
