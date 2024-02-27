import './Header.css';
import logo from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <header className="header container">
      <a className="header__logo" href="#">
        <img src={logo} alt="Логотип books" />
      </a>

      <nav className="header__nav">
        <a className="header__link" href="#">Избранное</a>
        <a className="header__link" href="#">История</a>
        <a className="btn btn--primary" href="#">Войти</a>
      </nav>
    </header>
  );
};
