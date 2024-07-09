import React, { useState } from "react";
import "./Form.css"; // Import the CSS file

function MainForm() {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("file", file);

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="main-form-container">
      <div className="main-form">
        <h2 className="main-form-title">MailItToMe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainForm;
