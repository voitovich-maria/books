import { useSearchParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { CardList } from '../../components/CardList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { booksApi } from '../../redux/booksApi';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const bookQuery = searchParams.get('q') ?? '';
  const { data: books, isLoading, isError } = booksApi.useGetBooksQuery({ bookQuery, limit: 20 });

  return (
    <main className="content container">
      {books && !isLoading && !isError &&
        <CardList>
          {books.map((book) =>
            <Card id={book.id} authors={book.authors} title={book.title} image={book.image} key={book.id} />
          )}
        </CardList>
      }

      {isLoading && <Loader />}
      {isError && <ErrorMessage text="Отсутствуют результаты, удовлетворяющие условию поиска" />}
    </main>
  );
};
