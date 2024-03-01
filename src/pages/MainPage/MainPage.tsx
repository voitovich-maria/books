import { Card } from '../../components/Card';
import { CardList } from '../../components/CardList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { booksApi } from '../../redux/booksApi';

export const MainPage = () => {
  const { data: books, isLoading, isError } = booksApi.useGetBooksQuery();

  return (
    <main className="content container">
      {books &&
        <CardList>
          {books.map((book) =>
            <Card id={book.id} authors={book.authors} title={book.title} image={book.image} key={book.id} />
          )}
        </CardList>
      }

      {isLoading && <Loader />}
      {isError && <ErrorMessage text="Ошибка при загрузке списка книг" />}
    </main>
  );
};
