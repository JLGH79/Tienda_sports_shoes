import React from "react";
import "./Cart.css";

export default function Cart({ cartItems, addToCart, removeFromCart, clearCart, toggleCart, isOpen }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <button id="toggle-carrito" onClick={toggleCart}>
        🛒
        {cartItems.length > 0 && (
          <span id="carrito-contador">{cartItems.length}</span>
        )}
      </button>

      <div className={`carrito-lateral ${isOpen ? "activo" : ""}`}>
        <h2>🛍 Tu Carrito</h2>

        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} × {item.qty}</span>
                <div>
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div id="total-carrito">Total: ${totalPrice.toFixed(2)}</div>

        {cartItems.length > 0 && (
          <div className="carrito-acciones">
            <button className="finalizar" onClick={() => {
              alert("Compra realizada con éxito");
              clearCart();
              toggleCart();
            }}>
              Finalizar Compra
            </button>
            <button className="vaciar" onClick={clearCart}>🗑 Vaciar</button>
          </div>
        )}
      </div>
    </>
  );
}
