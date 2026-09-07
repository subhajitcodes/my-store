import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart.jsx";

import { useCart } from "./context/CartContext";

const App = () => {
  const [products, setProducts] = useState([]);

  const { message } = useCart();

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Global notification */}
      {message && (
        <div className="fixed left-1/2 top-24 z-50 -translate-x-1/2 rounded-xl border border-green-400/30 bg-green-500 px-5 py-3 font-semibold text-gray-950 shadow-2xl">
          ✓ {message}
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
