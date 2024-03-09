import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import './SearchForm.css';
import { useNavigate } from 'react-router-dom';
import { BookQueryContext } from '../../context/BookQueryContext';
import { useAppDispatch, useCurrentUserSelector } from '../../hooks/reduxHooks';
import { useDebounce } from '../../hooks/useDebounce';
import { addedToHistory } from '../../redux/userSlice';
import { SearchList } from '../SearchList';

export const SearchForm = () => {
  const currentUser = useCurrentUserSelector();
  const bookQuery = useContext(BookQueryContext);
  const [searchText, setSearchText] = useState('');
  const [showSearchList, setShowSearchList] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="search"
        placeholder="Введите название книги"
        value={searchText}
        onChange={handleChange}
      />
      <button className="btn btn--primary" type="submit">
        Поиск
      </button>

      {showSearchList && debouncedSearchText && <SearchList bookQuery={debouncedSearchText} />}
    </form>
  );
};
