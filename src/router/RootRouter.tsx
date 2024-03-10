import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { PrivateRoute } from '../components/PrivateRoute';
import { useCurrentUserSelector } from '../hooks/reduxHooks';

const MainPage = lazy(() => import('../pages/MainPage').then(module => ({ default: module.MainPage })));
const BookPage = lazy(() => import('../pages/BookPage').then(module => ({ default: module.BookPage })));
const SignIn = lazy(() => import('../pages/SignIn').then(module => ({ default: module.SignIn })));
const SignUp = lazy(() => import('../pages/SignUp').then(module => ({ default: module.SignUp })));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage').then(module => ({ default: module.FavoritesPage })));
const HistoryPage = lazy(() => import('../pages/HistoryPage').then(module => ({ default: module.HistoryPage })));
const SearchPage = lazy(() => import('../pages/SearchPage').then(module => ({ default: module.SearchPage })));

export const RootRouter = () => {
  const currentUser = useCurrentUserSelector();

  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute isAuth={!!currentUser} />}>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
          <Route path="/*" element={<ErrorMessage text="Страница не найдена" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
