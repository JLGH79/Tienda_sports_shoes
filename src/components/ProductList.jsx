import ProductCard from "./ProductCard";
import Loader from "./Loader";

function ProductList({ products, loading, error, onAddToCart }) {
  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
