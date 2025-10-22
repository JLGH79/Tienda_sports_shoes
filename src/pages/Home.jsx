import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Video de fondo (funciona en GitHub Pages) */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={`${import.meta.env.BASE_URL}video/fondo.mp4`} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa de contenido */}
      <div className="hero-overlay">
        <h2>
          Bienvenido a <span>Tienda Sports & Shoes</span>
        </h2>
        <p>Encuentra los mejores productos para tu deporte favorito</p>
        <button className="btn-cta" onClick={() => navigate("/Tienda_sports_shoes/products")}>
          Ver Productos
        </button>
      </div>
    </section>
  );
}
