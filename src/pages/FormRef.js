import React, { useRef } from "react";
import Card from "../components/Card";

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      full_name: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmRef.current.value,
    };

    if (data.password !== data.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form submitted via useRef!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <h2>Section 2: useRef Form</h2>

        <label>Full Name:</label>
        <input type="text" id="full_name" ref={fullNameRef} />

        <label>Email:</label>
        <input type="email" id="email" ref={emailRef} />

        <label>Password:</label>
        <input type="password" id="password" ref={passwordRef} />

        <label>Confirm Password:</label>
        <input type="password" id="password_confirmation" ref={confirmRef} />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
