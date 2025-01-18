import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
