import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { LikeBtn } from '../../components/LikeBtn';
import { Loader } from '../../components/Loader';
import { booksApi } from '../../redux/booksApi';
import './BookPage.css';

export const BookPage = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = booksApi.useGetBooksDetailsQuery(bookId);

  return (
    <main className="content container">
      {/* Можно оставить этот компонент смешанным - немножко умным? Или лучше вынести глупый article? */}
      {book &&
        <article className="article">
          <div className="article__img">
            <img src={book.image} alt={book.title} />
            <LikeBtn />
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
