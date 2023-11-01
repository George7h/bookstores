import React from 'react';
import PropTypes from 'prop-types';
import DeleteBookButton from './deleteBookButton';

const Book = ({ book, onDelete }) => (
  <div className="book">
    <div className="bookcontain">
      <p id="categoryS">
        {' '}
        {book.category}
      </p>
      <p id="titleS">
        {' '}
        {book.title}
      </p>
      <p id="authorS">
        {' '}
        {book.author}
      </p>
      <div className="cardbtns">
        <button type="button" className="btns">Comments</button>
        <div className="line" />
        {' '}
        <DeleteBookButton onClick={onDelete} itemId={book.item_id} />
        <div className="line" />
        {' '}
        <button type="button" className="btns">Edit</button>
      </div>
    </div>
    <div className="progressCirle">
      <div className="circlecontain" />
      <div className="persentage">
        <p id="persentageSign">64%</p>
        <p>Completed</p>
      </div>
    </div>
    <div className="ruler2" />
    <div className="updateProgress">
      <h3 id="currentChapter">
        CURRENT CHAPTER
      </h3>
      <h5 id="chapter">
        Chapter six
      </h5>
      <button type="button" className="updateprogressbtn">Update Progress</button>
    </div>
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
