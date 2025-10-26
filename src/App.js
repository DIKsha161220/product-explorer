import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => alert("Error fetching data"));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🛍️ Product Explorer</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid">
          {filteredProducts.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>💰 ${p.price}</p>
              <p>⭐ {p.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
