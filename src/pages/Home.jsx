import "./Home.css";

export default function Home() {
  return (
    <section className="home-container">
   
      <video
        className="home-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

 
      <div className="home-overlay">
        <h1>Bienvenido a la Tienda Sports & Shoes</h1>
        <p>Explora nuestros productos y encuentra lo que buscas.</p>
        <a href="/products" className="btn-cta">Ver Productos</a>
      </div>
    </section>
  );
}
