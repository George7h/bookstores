import React from 'react';
import PropTypes from 'prop-types';

const AddBookButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Add Book
  </button>
);

AddBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddBookButton;
