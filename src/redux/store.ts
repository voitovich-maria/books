import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';
import { localStorageMiddleware } from './localeStorageMiddleware';
import { userReducer } from './userSlice'

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer,
  userReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware).prepend(localStorageMiddleware.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
