import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/img/book.svg';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LikeBtn } from '../../components/LikeBtn';
import { Loader } from '../../components/Loader';
import { useCurrentUserSelector } from '../../hooks/reduxHooks';
import { booksApi } from '../../redux/booksApi';
import './BookPage.css';

export const BookPage = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = booksApi.useGetBookDetailsQuery(bookId);
  const currentUser = useCurrentUserSelector();

  return (
    <main className="content container">
      {book &&
        <article className="article">
          <div className="article__img">
            <img src={book.image || defaultImage} alt={book.title} />
            {currentUser && <LikeBtn bookId={book.id} />}
          </div>

          <div className="article__text">
            <p className="article__authors">{book.authors}</p>
            <h2 className="article__title">{book.title}</h2>
            <p className="article__descr">{book.description}</p>
            <p className="article__publisher">
              Издательство: {book.publisher}
            </p>
            <p className="article__date">
              Дата публикации: {book.publishedDate}
            </p>
          </div>
        </article>
      }

      {isLoading && <Loader />}
      {isError && <ErrorMessage text="Ошибка при загрузке данных о книге" />}
    </main >
  );
};
