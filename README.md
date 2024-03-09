# books - приложение для поиска книг

https://voitovich-maria.github.io/books

Осуществляет поиск книг по названию, добавление в избранное и сохранение истории поиска. Для последних двух опций необходима регистрация.

Приложение использует [Google Books API](https://developers.google.com/books)

В разработке приложения использовались следующие библиотеки:

- react-hook-forms - для валидации форм;
- nanoid - для генерации id ссылок истории поиска;
- tippyjs - для реализации tooltip;
- react-spinners - предоставляет коллекцию прелоадеров.

### Обязательные требования

- [x] Реализованы Требования к функциональности.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется LocalStorage.

#### React

- [x] Функциональные компоненты c хуками в приоритете над классовыми.
- [x] Разделение на умные и глупые компоненты:
- Умные: [MainPage](https://github.com/voitovich-maria/books/blob/main/src/pages/MainPage/MainPage.tsx), [FavoritesPage](https://github.com/voitovich-maria/books/blob/main/src/pages/FavoritesPage/FavoritesPage.tsx), [HistoryPage](https://github.com/voitovich-maria/books/blob/main/src/pages/HistoryPage/HistoryPage.tsx)
- Глупые: [CardList](https://github.com/voitovich-maria/books/blob/main/src/components/CardList/CardList.tsx), [Card](https://github.com/voitovich-maria/books/blob/main/src/components/Card/Card.tsx)
- [x] Реализован рендеринг списков: [MainPage](https://github.com/voitovich-maria/books/blob/main/src/pages/MainPage/MainPage.tsx), [FavoritesPage](https://github.com/voitovich-maria/books/blob/main/src/pages/FavoritesPage/FavoritesPage.tsx), [HistoryPage](https://github.com/voitovich-maria/books/blob/main/src/pages/HistoryPage/HistoryPage.tsx)
- [x] Реализована хотя бы одна форма: [SearchForm](https://github.com/voitovich-maria/books/blob/main/src/components/SearchForm/SearchForm.tsx), [SignIn](https://github.com/voitovich-maria/books/blob/main/src/pages/SignIn/SignIn.tsx)
- [x] Есть применение Контекст API: [BookQueryContext](https://github.com/voitovich-maria/books/blob/main/src/context/BookQueryContext.ts)
- [x] Есть применение предохранителя (ErrorBoundary): [RootRouter](https://github.com/voitovich-maria/books/blob/main/src/router/RootRouter.tsx)
- [x] Есть хотя бы один кастомный хук: [useDebounce](https://github.com/voitovich-maria/books/blob/main/src/hooks/useDebounce.ts), [reduxHooks](https://github.com/voitovich-maria/books/blob/main/src/hooks/reduxHooks.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [ErrorMessage](https://github.com/voitovich-maria/books/blob/main/src/components/ErrorMessage/ErrorMessage.tsx), [HistoryItem](https://github.com/voitovich-maria/books/blob/main/src/components/HistoryItem/HistoryItem.tsx)
- [x] Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/voitovich-maria/books/blob/main/src/hooks/useDebounce.ts)
- [x] Есть применение lazy + Suspense: [RootRouter](https://github.com/voitovich-maria/books/blob/main/src/router/RootRouter.tsx)

#### Redux

- [x] Используется Modern Redux with Redux Toolkit: [store](https://github.com/voitovich-maria/books/blob/main/src/redux/store.ts)
- [x] Используются слайсы: [userSlice](https://github.com/voitovich-maria/books/blob/main/src/redux/userSlice.ts)
- [x] Есть хотя бы одна кастомная мидлвара: [localeStorageMiddleware](https://github.com/voitovich-maria/books/blob/main/src/redux/localeStorageMiddleware.ts)
- [x] Используется RTK Query: [booksApi](https://github.com/voitovich-maria/books/blob/main/src/redux/booksApi.ts)
- [x] Используется Transforming Responses: [booksApi](https://github.com/voitovich-maria/books/blob/main/src/redux/booksApi.ts)

### Необязательные требования

- [x] Используется TypeScript.
