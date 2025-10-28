import React from "react";
import Card from "../components/Card";

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <h2>Section 1: Static Form</h2>

        <label>Full Name:</label>
        <input type="text" id="full_name" />

        <label>Email:</label>
        <input type="email" id="email" />

        <label>Password:</label>
        <input type="password" id="password" />

        <label>Confirm Password:</label>
        <input type="password" id="password_confirmation" />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
