import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getUser, init } from '../utils/localStorageUtils';

export interface User {
  email: string;
  password: string;
}

export interface HistoryItem {
  id: string;
  bookQuery: string;
}

export interface UserDetails extends User {
  favorites: string[];
  history: HistoryItem[];
}

const initialState: UserDetails = init();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    signIn: (state, action: PayloadAction<string>) => {
      const user = getUser(action.payload);
      state.email = user.email;
      state.password = user.password;
      state.favorites = user.favorites;
      state.history = user.history;
    },
    signOut: (state) => {
      state.email = '';
      state.password = '';
      state.favorites = [];
      state.history = [];
    },
    addedToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removedFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item !== action.payload);
    },
    addedToHistory: (state, action: PayloadAction<string>) => {
      state.history.push({ id: nanoid(), bookQuery: action.payload });
    },
    removedFromHistory: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter((item) => item.id !== action.payload);
    }
  }
});

export const userReducer = userSlice.reducer;
export const {
  signUp,
  signIn,
  signOut,
  addedToFavorites,
  removedFromFavorites,
  addedToHistory,
  removedFromHistory
} = userSlice.actions;
