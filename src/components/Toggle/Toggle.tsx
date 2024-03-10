import { ChangeEvent, useContext } from 'react';
import './Toggle.css';
import { ThemeContext } from '../../context/ThemeContextProvider';

export const Toggle = () => {
  const { setIsLight } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLight(!e.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input" onChange={handleChange} />
      <div className="checkbox__div"></div>
    </label>
  );
};
