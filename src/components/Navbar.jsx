import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/fondo6.png";
import "../components/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Sports & Shoes" className="logo" />
          <span className="logo-text">
            <span className="tienda">Tienda</span> Sports & Shoes
          </span>
        </Link>
      </div>

      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Productos</Link></li>
        <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>Reseñas</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}
