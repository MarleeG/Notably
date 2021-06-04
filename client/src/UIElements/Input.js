import React from "react";
import { Form } from "react-bootstrap";

import "./Input.css";
const Input = (props) => {
  const { type, placeholder, label } = props;
  return (
    <Form.Group controlId="formBasicEmail">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control type={type || "text"} placeholder={placeholder || ""} />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
  );
};

export default Input;
