import React, { useState } from "react";
import Card from "../components/Card";

const FormState = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form submitted via useState!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Section 3: useState Form</h2>

        <label>Full Name:</label>
        <input
          type="text"
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
