import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookList = ({ books, onDelete }) => (
  <div className="book-list">
    {books.map((book) => (
      <Book key={book.item_id} book={book} onDelete={() => onDelete(book.item_id)} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
