import { useSearchParams } from 'react-router-dom';
import { Header } from './components/Header';
import { BookQueryContext } from './context/BookQueryContext';
import { RootRouter } from './router/RootRouter';

export const App = () => {
  const [searchParams] = useSearchParams();
  const bookQuery = searchParams.get('q') ?? '';

  return (
    <BookQueryContext.Provider value={bookQuery}>
      <Header />
      <RootRouter />
    </BookQueryContext.Provider>
  );
}
