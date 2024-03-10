import './CardList.css';

interface Props {
  children: JSX.Element;
}

export const CardList = ({ children }: Props) => {
  return (
    <ul className="cardlist">
      {children}
    </ul>
  );
};
