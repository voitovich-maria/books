import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HistoryItem.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removedFromHistory } from '../../redux/userSlice';

interface Props {
  id: string;
  bookQuery: string;
}

export const HistoryItem = ({ id, bookQuery }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removedFromHistory(id));
  };

  return (
    <li className="history-item">
      <Link className="history-item__link" to={`/search?q=${bookQuery}`}>{bookQuery}</Link>
      <button className="btn btn--primary" onClick={handleClick}>Удалить</button>
    </li>
  );
};

HistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  bookQuery: PropTypes.string.isRequired
};
