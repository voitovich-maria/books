import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface BookData {
  id: string;
  volumeInfo: {
    authors: string[];
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    publisher: string;
    publishedDate: string;
    description: string;
  };
}

interface BooksData {
  items: BookData[];
}

export interface Book {
  id: string,
  title: string,
  authors: string[],
  image: string,
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], number>({
      query: (limit) => ({
        url: 'volumes?q=subject:fiction',
        params: {
          langRestrict: 'ru',
          projection: 'lite',
          maxResults: limit,
        }
      }),
      transformResponse: ({ items }: BooksData) => items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        image: item.volumeInfo.imageLinks.thumbnail,
      }))
    })
  })
});
