import React from 'react';
import { useParams } from 'react-router-dom';


export default function ProductDetail({ addToCart }) {
const { id } = useParams();


const product = { id: Number(id), title: `Producto ${id}`, price: 100 };


return (
<div className="product-detail">
<h1>{product.title}</h1>
<p>Precio: ${product.price}</p>
<button onClick={() => addToCart(product)}>Agregar al carrito</button>
</div>
);
}