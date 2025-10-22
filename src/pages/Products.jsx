import React, { useState } from "react";
import useFetch from "../hooks/useFetch"; 
import "./Products.css";

export default function Products({ addToCart }) {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const [sortOrder, setSortOrder] = useState("asc");

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <h1>Productos</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Ordenar por precio: </label>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="asc">Menor a Mayor</option>
          <option value="desc">Mayor a Menor</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} style={{ width: "120px", height: "120px" }} />
            <h3>{p.title}</h3>
            <p>Precio: ${p.price}</p>
            <button onClick={() => addToCart(p)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
