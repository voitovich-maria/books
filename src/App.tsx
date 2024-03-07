import { Header } from './components/Header';
import { CurrentUserContext } from './context/CurrentUserContext';
import { useCurrentUserSelector } from './hooks/reduxHooks';
import { RootRouter } from './router/RootRouter';

export const App = () => {
  const currentUser = useCurrentUserSelector()

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <RootRouter />
    </CurrentUserContext.Provider>
  );
}
