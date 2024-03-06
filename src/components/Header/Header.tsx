import './Header.css';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signOut } from '../../redux/userSlice';

export const Header = () => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(signOut());
    navigate('/');
  }

  return (
    <header className="header container">
      <Link className="header__logo" to={'/'}>
        <img src={logo} alt="Логотип books" />
      </Link>

      <nav className="header__nav">
        {currentUser
          ? <>
            <NavLink className="header__link" to={'/favorites'}>Избранное</NavLink>
            <NavLink className="header__link" to={'/history'}>История</NavLink>
            <Tippy content={currentUser} duration={200} offset={[0, 8]} placement="bottom-end">
              <button className="btn header__btn" onClick={handleClick}>Выйти</button>
            </Tippy>
          </>
          : location.pathname === '/signin'
            ? <Link className="btn btn--primary" to={'/signup'}>Зарегистрироваться</Link>
            : <Link className="btn btn--primary" to={'/signin'}>Войти</Link>
        }
      </nav>
    </header>
  );
};
