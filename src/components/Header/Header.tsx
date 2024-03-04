import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <header className="header container">
      <Link className="header__logo" to={'/'}>
        <img src={logo} alt="Логотип books" />
      </Link>

      <nav className="header__nav">
        <a className="header__link" href="#">Избранное</a>
        <a className="header__link" href="#">История</a>
        <a className="btn btn--primary" href="#">Войти</a>
      </nav>
    </header>
  );
};
