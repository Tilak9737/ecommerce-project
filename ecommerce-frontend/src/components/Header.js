import React from 'react';
import '../styles/Header.css'; // Optional for styling

const Header = () => {
  return (
    <header>
      <nav>
        <h1>E-Commerce</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
