import React from 'react';
import PropTypes from 'prop-types';
import DeleteBookButton from './deleteBookButton';

const Book = ({ book, onDelete }) => (
  <div className="book">
    <p>
      Title:
      {' '}
      {book.title}
    </p>
    <p>
      Author:
      {' '}
      {book.author}
    </p>
    <p>
      Category:
      {' '}
      {book.category}
    </p>
    <DeleteBookButton onClick={onDelete} itemId={book.item_id} />
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
