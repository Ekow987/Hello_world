import React from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Carousel from './Carousel';
import Col from 'react-bootstrap/Col';
import Table from  './Table';

function Home() {
    return (
        <div>
            <Carousel/>
            <Table/>
            <h3 id="cent">REGISTER PATIENT</h3>
            <Form className="for" >
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Firstname</Form.Label>
      <Form.Control type="text" placeholder="Enter firstname" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="text" placeholder="Enter Latname" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter Address" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control placeholder="DD/MM/YY" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Age</Form.Label>
    <Form.Control placeholder="Age" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Contry</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Ghana</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Kenya</option>
        <option>Nigera</option>
        <option>Gabon</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>NHIS</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Yes</option>
        <option>No</option>
        
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="text" placeholder="Enter contact" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Card Number</Form.Label>
      <Form.Control type="text" placeholder="Enter contact" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Card price</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>20.00</option>
        
        
      </Form.Control>
    </Form.Group>

    

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Home;
