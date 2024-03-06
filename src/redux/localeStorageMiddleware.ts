import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setUser, setCurrentUser, removeCurrentUser } from '../utils/localStorageUtils';
import { AppDispatch, RootState } from './store';
import { signUp, signIn, signOut, addToFavorites, removeFromFavorites } from './userSlice';

export const localStorageMiddleware = createListenerMiddleware();

const startAppListening = localStorageMiddleware.startListening.withTypes<RootState, AppDispatch>();

startAppListening({
  actionCreator: signUp,
  effect: (action, api) => {
    setCurrentUser(action.payload.email);
    setUser(api.getState().userReducer);
  },
});

startAppListening({
  actionCreator: signIn,
  effect: (action) => {
    setCurrentUser(action.payload);
  },
});

startAppListening({
  actionCreator: signOut,
  effect: () => {
    removeCurrentUser();
  },
});

startAppListening({
  matcher: isAnyOf(addToFavorites, removeFromFavorites),
  effect: (_, api) => {
    setUser(api.getState().userReducer);
  },
});
