import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="no-results">No products found.</div>;
  }
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
