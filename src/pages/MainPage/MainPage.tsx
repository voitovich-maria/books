import { Card } from '../../components/Card';
import { CardList } from '../../components/CardList';
import { booksApi } from '../../redux/booksApi';
import './MainPage.css';

export const MainPage = () => {
  const { data: books } = booksApi.useGetBooksQuery(20);

  return (
    <main className="content container">
      {books &&
        <CardList>
          {books.map((book) =>
            <Card id={book.id} authors={book.authors} title={book.title} image={book.image} key={book.id} />
          )}
        </CardList>
      }
      {/* TODO: pagination */}
    </main>
  );
};
