import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { LikeBtn } from '../LikeBtn';
import type { Book } from '../../redux/booksApi';
import './Card.css';

export const Card = ({ id, authors, title, image }: Book) => {
  const currentUser = useContext(CurrentUserContext)

  return (
    <li className="card">
      <Link className="card__img" to={`/book/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <p className="card__authors">{authors}</p>

      <h2 className="card__title">
        <Link to={`/book/${id}`}>{title}</Link>
      </h2>

      {currentUser && <LikeBtn bookId={id} />}
    </li>
  );
};
