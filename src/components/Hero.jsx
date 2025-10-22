import React from "react";
import "../components/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1>Bienvenido a la Tienda Sports & Shoes</h1>
        <p>Explora nuestros productos y encuentra lo que buscas.</p>
        <a href="/products" className="btn-cta">Ver Productos</a>
      </div>
    </section>
  );
}
  