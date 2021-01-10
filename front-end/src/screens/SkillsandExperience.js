import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge'
import SkillsExperienceForm from '../components/SkillsExperienceForm';

const SkillsandExperience = () => {
  return (
    <div>
      <h1>Set Up Your Profile</h1>
      <Container justify="center">
        <Row>
          <Col>
            <SkillsExperienceForm />
          </Col>
          <Col>Insert Image Here</Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillsandExperience;
