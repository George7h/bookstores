import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/'; // Replace with your API URL
export const appId = 'np8yrV4VsjkA4M6A5u8Q';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(`${baseUrl}apps/${appId}/books`);
    return response.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ book }) => {
    await axios.post(`${baseUrl}apps/${appId}/books`, book);
    return book;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async ({ itemId }) => {
    await axios.delete(`${baseUrl}apps/${appId}/books/${itemId}`);
    return itemId;
  },
);

const initialState = {
  books: [],
  isLoading: '',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = 'Loading...';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (action.payload !== '') {
        const books = [];
        const keys = Object.keys(action.payload);
        keys.forEach((keyid) => {
          books.push({
            item_id: keyid,
            ...action.payload[keyid][0],
          });
        });
        state.books = books;
        if (state.books.length === 0) state.error = 'No books were found';
      } else {
        state.error = 'No result';
      }
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = [...state.books, action.payload];
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = 'Book removed!';
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    });
  },
});

export default booksSlice.reducer;
