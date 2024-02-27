import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
