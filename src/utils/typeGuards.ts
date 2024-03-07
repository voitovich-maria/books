import { User, UserDetails } from '../redux/userSlice';

export const isUser = (value: unknown): value is User => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'email' in value &&
    'password' in value &&
    typeof value.email === 'string' &&
    typeof value.password === 'string'
  );
};

export const isUserDetails = (value: unknown): value is UserDetails => {
  return (
    isUser(value) &&
    'favorites' in value &&
    'history' in value &&
    Array.isArray(value.favorites) &&
    Array.isArray(value.history) &&
    value.favorites.every((item) => typeof item === 'string') &&
    value.history.every((item) => typeof item === 'string')
  );
};
