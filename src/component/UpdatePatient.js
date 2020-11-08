import React from 'react';
import Doc from '../img/h14.jpg';
import Card from 'react-bootstrap/Card';
 import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';


function UpdatePatient() {
    return (
        <div>
               
          <Card>
<Card.Img variant="top" src={Doc }  id="koko"/>
    <Card.Body>
      <Card.Text>
     ssssssssssssssssssss
      </Card.Text>
    </Card.Body>
  </Card>

  
  <h3 id="cent">UPDATE PATIENT</h3>
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
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Age</Form.Label>
    <Form.Control placeholder="Enter Age" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control placeholder="DD/MM/YY" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
        
    )
}

export default UpdatePatient;
