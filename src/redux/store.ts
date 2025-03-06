import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './features/authentication/authentication';
import { coreApi } from './services/core/core';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coreApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
