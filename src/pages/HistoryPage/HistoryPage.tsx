import { ErrorMessage } from '../../components/ErrorMessage';
import { HistoryItem } from '../../components/HistoryItem';
import { useHistorySelector } from '../../hooks/reduxHooks';

export const HistoryPage = () => {
  const history = useHistorySelector();

  return (
    <main className="content container">
      <ul>
        {history.map(({ id, bookQuery }) =>
          <HistoryItem id={id} bookQuery={bookQuery} key={id} />
        )}
      </ul>

      {history.length === 0 && <ErrorMessage text="Здесь пока ничего нет" />}
    </main>
  );
};
