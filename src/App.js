import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import HomePage from './routes/Homepage';
import CategoriesPage from './routes/Category';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <ul className="nav-list">
          <li className="appName"><h3>Bookstore CMS</h3></li>
          <li className="nav-link">
            <Link to="/">BOOKS</Link>
          </li>
          <li className="nav-link">
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <span className="material-symbols-outlined">
          account_circle
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
