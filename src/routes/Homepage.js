import React, { useState } from 'react';
import BookList from '../components/Booklist';
import BookForm from '../components/Bookform';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
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
