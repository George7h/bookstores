import React from 'react';
import PropTypes from 'prop-types';

const AddBookButton = ({ onClick }) => (
  <button type="button" className="addButton" onClick={onClick}>
    ADD BOOK
  </button>
);

AddBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddBookButton;
