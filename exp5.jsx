import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    setSubmittedData({ ...form });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit">Send</button>

          {error && <div className="error">{error}</div>}
        </form>

        {submitted && submittedData && (
          <div className="submitted-message">
            <h3>Your Message:</h3>
            <div className="message-content">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100vw;
          background: #f3f4f6;
          padding: 20px;
          margin: 0;
          box-sizing: border-box;
        }

        .card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .submitted-message {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .submitted-message h3 {
          color: #4a6fa5;
          margin-bottom: 16px;
          font-size: 18px;
        }

        .message-content {
          background: #f9fafb;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .message-content p {
          margin: 8px 0;
          color: #444;
          font-size: 14px;
        }

        .message-content strong {
          color: #333;
          margin-right: 8px;
        }

        .title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 24px;
          color: #333;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          margin-bottom: 8px;
          font-size: 14px;
          color: #555;
        }

        input,
        textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 16px;
          transition: border 0.3s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #4a6fa5;
          outline: none;
        }

        button {
          padding: 12px;
          background-color: #4a6fa5;
          color: white;
          font-weight: 600;
          font-size: 16px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #3a5a80;
        }

        .error,
        .success {
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
        }

        .error {
          background-color: #ffe5e5;
          color: #c0392b;
        }

        .success {
          background-color: #e6f7ea;
          color: #2e7d32;
        }
      `}</style>
    </div>
  );
}

export default App
