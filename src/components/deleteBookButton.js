import React from 'react';
import PropTypes from 'prop-types';

const DeleteBookButton = ({ onClick, itemId }) => (
  <button type="button" onClick={() => onClick(itemId)}>
    Delete
  </button>
);

DeleteBookButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default DeleteBookButton;
