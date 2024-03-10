import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import './SearchForm.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useCurrentUserSelector } from '../../hooks/reduxHooks';
import { useDebounce } from '../../hooks/useDebounce';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { addedToHistory } from '../../redux/userSlice';
import { SearchList } from '../SearchList';

export const SearchForm = () => {
  const currentUser = useCurrentUserSelector();
  const ref = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('');
  const [showSearchList, setShowSearchList] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const bookQuery = searchParams.get('q') ?? '';
  useEffect(() => {
    setSearchText(bookQuery);
  }, [bookQuery]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedSearchText = searchText.trim();
    if (currentUser) {
      dispatch(addedToHistory(formattedSearchText));
    }
    navigate(formattedSearchText ? `/search?q=${formattedSearchText}` : '/');
    setShowSearchList(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setShowSearchList(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSearchList(false), 500);
  };

  const handleOutsideClick = () => {
    setShowSearchList(false);
  };

  useOutsideClick(ref, handleOutsideClick);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="search"
        placeholder="Введите название книги"
        value={searchText}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={ref}
      />
      <button className="btn btn--primary" type="submit">
        Поиск
      </button>

      {showSearchList && debouncedSearchText && <SearchList bookQuery={debouncedSearchText} />}
    </form>
  );
};
