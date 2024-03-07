import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCurrentUserSelector = () => useAppSelector((state) => state.userReducer.email);
export const useFavoritesSelector = () => useAppSelector((state) => state.userReducer.favorites);
