import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';

const MainPage = lazy(() => import('../pages/MainPage').then(module => ({ default: module.MainPage })));
const BookPage = lazy(() => import('../pages/BookPage').then(module => ({ default: module.BookPage })));
const SignIn = lazy(() => import('../pages/SignIn').then(module => ({ default: module.SignIn })));
const SignUp = lazy(() => import('../pages/SignUp').then(module => ({ default: module.SignUp })));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage').then(module => ({ default: module.FavoritesPage })));
const HistoryPage = lazy(() => import('../pages/HistoryPage').then(module => ({ default: module.HistoryPage })));


export const RootRouter = () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:bookId" element={<BookPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/*" element={<ErrorMessage text="Страница не найдена" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
