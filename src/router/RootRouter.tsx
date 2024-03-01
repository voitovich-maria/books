import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';

const MainPage = lazy(() => import('../pages/MainPage').then(module => ({ default: module.MainPage })));
const BookPage = lazy(() => import('../pages/BookPage').then(module => ({ default: module.BookPage })));

/**
 * Лучше выносить маршруты, lazy, Suspence, ErrorBoundary
 * в отдельный компонент? Или можно было оставить в App?
 */
export const RootRouter = () => {
  return (

    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
