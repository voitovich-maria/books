import { Link } from 'react-router-dom';
import defaultImage from '../../assets/img/book.svg';
import { useCurrentUserSelector } from '../../hooks/reduxHooks';
import { LikeBtn } from '../LikeBtn';
import type { Book } from '../../redux/booksApi';
import './Card.css';

export const Card = ({ id, authors, title, image }: Book) => {
  const currentUser = useCurrentUserSelector();

  return (
    <li className="card">
      <Link className="card__img" to={`/${id}`}>
        <img src={image || defaultImage} alt={title} />
      </Link>

      <p className="card__authors">{authors}</p>

      <h2 className="card__title">
        <Link to={`/${id}`}>{title}</Link>
      </h2>

      {currentUser && <LikeBtn bookId={id} />}
    </li>
  );
};
