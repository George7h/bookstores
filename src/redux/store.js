import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
