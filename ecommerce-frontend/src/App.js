import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header"; // Assuming you have a Header component
import Footer from "./components/Footer"; // Assuming you have a Footer component

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
