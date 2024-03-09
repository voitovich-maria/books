import { booksApi } from '../../redux/booksApi';
import { Card } from '../Card';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';

interface Props {
  bookId: string;
}

export const FavoritesCard = ({ bookId }: Props) => {
  const { data: book, isLoading, isError } = booksApi.useGetBookDetailsQuery(bookId);

  return (
    <>
      {book && <Card id={book.id} authors={book.authors} title={book.title} image={book.image} key={book.id} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage text="Ошибка при загрузке данных о книге" />}
    </>
  );
};
