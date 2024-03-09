import { useContext } from 'react';
import { Card } from '../../components/Card';
import { CardList } from '../../components/CardList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { BookQueryContext } from '../../context/BookQueryContext';
import { booksApi } from '../../redux/booksApi';

export const SearchPage = () => {
  const bookQuery = useContext(BookQueryContext);
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
