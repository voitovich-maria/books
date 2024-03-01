import { CSSProperties } from 'react';
import { RotateLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '140px auto',
};

export const Loader = () => {
  return (
    <RotateLoader cssOverride={override} color="#e02d71" aria-label="Загрузка" />
  );
};
