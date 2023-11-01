import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBook, addBook } from '../redux/books/booksSlice';
import BookList from '../components/Booklist';
import BookForm from '../components/Bookform';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = (book) => {
    dispatch(addBook({ book }));
  };
  // eslint-disable-next-line camelcase
  const handleDeleteBook = (item_id) => {
  // eslint-disable-next-line camelcase
    dispatch(removeBook({ itemId: item_id }));
  };

  return (
    <div>
      <h2>Booklist</h2>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default HomePage;
