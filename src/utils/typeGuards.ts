import type { User, HistoryItem, UserDetails } from '../redux/userSlice';

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

const isHistoryItem = (value: unknown): value is HistoryItem => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'bookQuery' in value &&
    typeof value.id === 'string' &&
    typeof value.bookQuery === 'string'
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
    value.history.every((item) => isHistoryItem(item))
  );
};
