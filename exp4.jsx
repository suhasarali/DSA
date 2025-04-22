import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#3498db" }}>🛒 Product List</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#f9f9f9"
          }}>
            <img src={product.image} alt={product.title} style={{ height: "100px", objectFit: "contain" }} />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
            <p style={{ color: "#2ecc71", fontWeight: "bold" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
