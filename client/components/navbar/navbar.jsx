import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-row">
        <button className="home-button">Home</button>
        <button className="category-button">Categories</button>
        <button type="button" className="btn btn-link">
          <span className="bi bi-bag-fill red-color align-right"></span>
        </button>
      </div>
    </div>
  );
}
