import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SignInForm from '../components/SingInForm';
import RegisterForm from '../components/RegisterForm';

const LogInSignUp = () => {
  const [showRegisterForm, setShowForm] = useState(false); //use false for log in/
  //true for register
  function logInClicked() {
    setShowForm(false);
    console.log('Log in clicked');
  }

  function registerClicked() {
    setShowForm(true);
    console.log('register clicked');
  }

  return (
    <div>
      <Container justify = "center">
        <Row>
          <Col>Insert Image Here</Col>
          <Col>
            <Button onClick={logInClicked} variant="outline-primary">
              Sign-In
            </Button>{' '}
            <Button onClick={registerClicked} variant="outline-secondary">
              Sign-Up
            </Button>{' '}
            {showRegisterForm ? <RegisterForm /> : <SignInForm />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogInSignUp;
