import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const buttonStyle = {
  width: '280px',
  height: '45px',
  left: '1028px',
  top: '603px',
  background: '#FD7652',
  boxShadow: '4px 4px 4px rgba(43, 50, 87, 0.25)',
  borderRadius: '34.5px',
  border: 'none',
  alignSelf: 'center',
  maxWidth: '100%',
  marginTop: '40px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const RegisterForm = ({ signUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    await signUp(email, password);
  }

  const allFieldsCompleted = email && password && confirmPassword;
  const passwordMatches = password === confirmPassword;
  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Password"
          isInvalid={!passwordMatches}
        />
      </Form.Group>
      <Button
        style={buttonStyle}
        type="submit"
        disabled={!allFieldsCompleted || !passwordMatches}
      >
        Sign Up
      </Button>
    </Form>
  );
};

export default RegisterForm;
