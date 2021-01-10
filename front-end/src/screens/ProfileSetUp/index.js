import React from 'react';

//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import ProfileSetUpForm from '../../components/ProfileSetUpForm';
import userWorkingOrangeImg from '../LoginSignUp/assets/user-working-orange.png';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  section:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 58%;

    box-shadow: 10px 8px 15px rgba(0, 0, 0, 0.25);
    /* background-image: url(./assets/user-working.png); */
    img {
      width: 1031px;
      max-width: 100%;
      margin: -80px;
    }
  }

  section:first-child {
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
const ProfileSetup = () => {
  return (
    <div>
      
      <Container>
        <section>
          <ProfileSetUpForm />
        </section>
        <section>
          <img src={userWorkingOrangeImg} alt="Logo" />
        </section>
      </Container>
    </div>
  );
};

export default ProfileSetup;
