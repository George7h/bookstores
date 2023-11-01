import React from 'react';
import PropTypes from 'prop-types';

const DeleteBookButton = ({ onClick, bookId }) => (
  <button type="button" onClick={() => onClick(bookId)}>
    Delete
  </button>
);

DeleteBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  bookId: PropTypes.number.isRequired,
};

export default DeleteBookButton;
