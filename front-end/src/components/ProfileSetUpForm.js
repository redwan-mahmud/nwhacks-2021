import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileSetUpForm = () => {
  //const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     console.log(email);
  //     console.log(password);
  //   }
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>Male</option>
          <option>Female</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
      
      <Form.Group controlId="formGridDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type = "date" placeholder="DD/MM/YYYY" />
      </Form.Group>

      <Form.Group controlId="formGridStreet Address">
        <Form.Label>Street</Form.Label>
        <Form.Control placeholder="Enter your address" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridProvince">
        <Form.Label>Province</Form.Label>
        <Form.Control />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProfileSetUpForm;
