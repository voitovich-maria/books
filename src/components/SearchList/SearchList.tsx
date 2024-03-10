import { Link } from 'react-router-dom';
import { booksApi } from '../../redux/booksApi';
import './SearchList.css';

interface Props {
  bookQuery: string;
}

export const SearchList = ({ bookQuery }: Props) => {
  const { data: books, isError } = booksApi.useGetBooksQuery({ bookQuery, limit: 10 });

  return (
    <ul className="search__list">
      {books && !isError && books.map((book) =>
        <li key={book.id}>
          <Link className="search__link" to={`/${book.id}`}>{book.title}</Link>
        </li>
      )}
    </ul>
  );
};
