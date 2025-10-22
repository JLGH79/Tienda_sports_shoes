import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
return (
<div className="not-found-page">
<h1>404 - Página no encontrada</h1>
<p>Lo sentimos, la página que buscas no existe.</p>
<Link to="/">
<button>Volver al inicio</button>
</Link>
</div>
);
}