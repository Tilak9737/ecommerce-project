import React from 'react';
import '../styles/HomePage.css'; // Optional for styling

const HomePage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$50' },
    { id: 2, name: 'Product 2', price: '$30' },
    { id: 3, name: 'Product 3', price: '$40' },
  ];

  return (
    <main>
      <h2>Welcome to E-Commerce</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
