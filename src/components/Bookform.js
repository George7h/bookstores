import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddBookButton from './addBookButton';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(''); // Initialize with an empty string

  const generateItemId = () => `item_${Date.now()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      // eslint-disable-next-line
      const item_id = generateItemId();
      onAdd({
        // eslint-disable-next-line
        item_id, title, author, category,
      });
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const categoryOptions = [
    'Action',
    'Comedy',
    'Fantasy',
    'Drama',
    'Horror',
    'Suspense',
    'Thriller',
    'Crime',
    'Kids',
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h4>ADD NEW BOOK</h4>
      <input
        className="titleInput"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="authorInput"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        className="dropdown"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        {categoryOptions.map((categoryOption) => (
          <option key={categoryOption} value={categoryOption}>
            {categoryOption}
          </option>
        ))}
      </select>
      <AddBookButton onClick={handleSubmit} />
    </form>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
