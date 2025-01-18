const express = require("express"); // Import express
const cors = require("cors"); // Import CORS middleware

const app = express(); // Initialize the app
const PORT = 5000; // Define the port

app.use(cors()); // Enable CORS for all routes

// Define the route for fetching products
app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality noise-canceling headphones with a sleek design.",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Track your fitness and stay connected on the go.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      description: "RGB mechanical keyboard for an ultimate gaming experience.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      description: "Ergonomic and responsive wireless mouse.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
    },
  ];
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
