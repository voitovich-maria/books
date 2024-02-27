import { Book } from '../../redux/booksApi';
import './Card.css';

export const Card = ({ authors, title, image }: Book) => {
  const formattedAuthors: string = authors.join(', ');

  return (
    <li className="card">
      <a className="card__img" href="#">
        <img src={image} alt={title} />
      </a>

      <p className="card__author">{formattedAuthors}</p>

      <h2 className="card__title">
        <a href="">{title}</a>
      </h2>

      <button className="btn card__like-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="#e02d71" />
        </svg>
      </button>
    </li>
  );
};
