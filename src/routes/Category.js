import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div>
      <h2>Categories Page</h2>
      {categories.length === 0 ? (
        <p>Under Construction</p>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesPage;
