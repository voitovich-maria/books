import './ErrorMessage.css';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ text = 'Что-то пошло не так...' }) => {
  return (
    <h2 className="error">{text}</h2>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string
};
