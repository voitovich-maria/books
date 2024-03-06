import { CardList } from '../../components/CardList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { FavoritesCard } from '../../components/FavoritesCard';
import { useFavoritesSelector } from '../../hooks/reduxHooks';

export const FavoritesPage = () => {
  const favorites = useFavoritesSelector();
  return (
    <main className="content container">
      <CardList>
        {favorites.map((bookId) =>
          <FavoritesCard bookId={bookId} key={bookId} />
        )}
      </CardList>

      {favorites.length === 0 && <ErrorMessage text="Здесь пока ничего нет" />}
    </main>
  );
};
