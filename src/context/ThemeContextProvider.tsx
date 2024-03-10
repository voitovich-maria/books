import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react';

interface ThemeContextType {
  isLight: boolean;
  setIsLight: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLight: true,
  setIsLight: () => undefined,
});

interface Props {
  children: JSX.Element[];
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState(true);
  const value = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
