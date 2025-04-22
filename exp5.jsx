import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Please fill all fields.");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px", backgroundColor: "blue", color: "white", border: "none" }}>
          Submit
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {submittedData && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Submitted Info:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
