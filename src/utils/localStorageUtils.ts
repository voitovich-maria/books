import { isUser, isUserDetails } from './typeGuards';
import type { User, UserDetails } from '../redux/userSlice';

export const checkSignUp = (email: string) => {
  const userData = localStorage.getItem(email);
  return !userData;
};

export const checkSignInEmail = (email: string) => {
  const userData = localStorage.getItem(email);
  return userData;
};

export const checkSignInPassword = ({ email, password }: User) => {
  const userData = localStorage.getItem(email);
  if (userData) {
    const user: unknown = JSON.parse(userData);
    return isUser(user) && user.password === password;
  }
};

export const setCurrentUser = (email: string) => {
  localStorage.setItem('currentUser', email);
};

export const removeCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const setUser = (user: UserDetails) => {
  localStorage.setItem(user.email, JSON.stringify(user));
};

export const getUser = (email: string): UserDetails => {
  const userData = localStorage.getItem(email);
  if (userData) {
    const user: unknown = JSON.parse(userData);
    if (isUserDetails(user)) {
      return {
        email: user.email,
        password: user.password,
        favorites: user.favorites,
        history: user.history,
      };
    }
  }
  return {
    email: '',
    password: '',
    favorites: [],
    history: [],
  };
};

export const init = () => {
  const email = localStorage.getItem('currentUser');
  if (email) {
    return getUser(email);
  }
  return {
    email: '',
    password: '',
    favorites: [],
    history: [],
  };
};
