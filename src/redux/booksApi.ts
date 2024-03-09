import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface BookData {
  id: string;
  volumeInfo: {
    authors: string[];
    title: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

interface BooksData {
  items: BookData[];
}

interface BookDetailsData {
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

interface BookQuery {
  bookQuery: string,
  limit: number;
}

export interface Book {
  id: string,
  title: string,
  authors: string,
  image: string,
}

export interface BookDetails extends Book {
  publisher: string;
  publishedDate: string;
  description: string;
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], BookQuery>({
      query: ({ bookQuery, limit }) => ({
        url: `volumes?q=${bookQuery ? 'intitle:' + bookQuery : 'subject:fiction&&langRestrict=ru'}`,
        params: {
          projection: 'lite',
          maxResults: limit,
        }
      }),
      transformResponse: ({ items }: BooksData) => items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors?.join(', '),
        image: item.volumeInfo.imageLinks?.thumbnail,
      }))
    }),

    getBookDetails: builder.query<BookDetails, string | undefined>({
      query: (bookId) => ({
        url: `volumes/${bookId}`,
        params: {
          projection: 'lite',
        }
      }),
      transformResponse: (item: BookDetailsData) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors?.join(', '),
        image: item.volumeInfo.imageLinks?.thumbnail,
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate,
        description: item.volumeInfo.description,
      }),
    }),
  })
});
