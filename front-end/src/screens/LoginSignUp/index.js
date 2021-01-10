import React, { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SignInForm from '../../components/SingInForm';
import RegisterForm from '../../components/RegisterForm';
import styled from 'styled-components';
import userWorkingWhiteImg from './assets/user-working-white.png';
import userWorkingOrangeImg from './assets/user-working-orange.png';

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  section:first-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 58%;
    background: ${({ showRegisterForm }) =>
      showRegisterForm ? '#FFC43A' : '#2B3257'};
    box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.25);
    /* background-image: url(./assets/user-working.png); */
    img {
      width: 1031px;
      max-width: 100%;
      margin: -80px;
    }
  }

  section:last-child {
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    color: #fd7652;
    font-family: Encode Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.17em;
    .btn-container {
      margin-bottom: 40px;
      display: flex;
      color: rgba(43, 50, 87, 0.5);
      font-size: 22px;
      padding: 0.375rem 0rem;
      button:first-child {
        padding-left: 0;
      }
      button {
        border: none;
        text-align: center;
        font-size: 22px;
        font-family: Encode Sans;
        font-style: normal;
        letter-spacing: 0.17em;
        font-weight: 600;
        padding-bottom: 0;
        padding-top: 0;

        :hover {
          background-color: transparent;
          text-decoration: underline;
        }
      }
      .active-form-btn {
        color: #2b3257;
      }
      .inactive-form-btn {
        color: rgba(43, 50, 87, 0.5);
      }
    }
  }
`;
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
    <Container showRegisterForm={showRegisterForm}>
      <section>
        <img
          src={showRegisterForm ? userWorkingOrangeImg : userWorkingWhiteImg}
          alt="Logo"
        />
      </section>
      <section>
        <div className="btn-container">
          <Button
            className={
              !showRegisterForm ? 'active-form-btn' : 'inactive-form-btn'
            }
            onClick={logInClicked}
            variant="outline-primary"
          >
            Sign-In
          </Button>
          |
          <Button
            className={
              showRegisterForm ? 'active-form-btn' : 'inactive-form-btn'
            }
            onClick={registerClicked}
            variant="outline-primary"
          >
            Sign-Up
          </Button>
        </div>
        <div>{showRegisterForm ? <RegisterForm /> : <SignInForm />}</div>
      </section>
    </Container>
  );
};

export default LogInSignUp;
