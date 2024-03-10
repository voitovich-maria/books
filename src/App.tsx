import { Header } from './components/Header';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { RootRouter } from './router/RootRouter';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <RootRouter />
    </ThemeContextProvider>
  );
}
