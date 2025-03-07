import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer, { authenticationSlice } from './features/authentication/authentication';
import uiReducer, { uiSlice } from './features/ui/ui';
import { coreApi } from './services/core/core';

export const store = configureStore({
  reducer: {
    [authenticationSlice.name]: authenticationReducer,
    [uiSlice.name]: uiReducer,
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coreApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
