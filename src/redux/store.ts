import { configureStore } from '@reduxjs/toolkit';
import testReducer from './features/test/testSlice';
import { coreApi } from './services/core/core';

export const store = configureStore({
  reducer: {
    test: testReducer,
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coreApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
