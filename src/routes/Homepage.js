import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/Booklist';
import BookForm from '../components/Bookform';
import { addBook, removeBook } from '../redux/books/booksSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const getNextItemId = () => {
    if (books.length === 0) {
      return 'item1';
    }
    const lastItemId = books[books.length - 1].id;
    const lastItemNumber = parseInt(lastItemId.replace('item', ''), 10);
    return `item${lastItemNumber + 1}`;
  };

  const handleAddBook = (newBook) => {
    const newBookWithId = { ...newBook, id: getNextItemId() };
    dispatch(addBook(newBookWithId));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
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
