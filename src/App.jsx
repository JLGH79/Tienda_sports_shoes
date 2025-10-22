import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if(existing) return prev.map(item => item.id === product.id ? {...item, qty: item.qty+1} : item);
      return [...prev, {...product, qty:1}];
    });
    alert("🟡 Producto agregado al carrito");
  };

  const removeFromCart = (product) => {
    setCart(prev => prev.map(item => item.id === product.id ? {...item, qty:item.qty-1} : item).filter(item => item.qty>0));
  };

  const clearCart = () => setCart([]);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <Cart
        cartItems={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        toggleCart={toggleCart}
        isOpen={isCartOpen}
      />
    </div>
  );
}
