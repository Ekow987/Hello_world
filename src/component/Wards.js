import React from 'react';
import Doc from '../img/emerg1.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
 

function Wards() {
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

  <h3 id="cent">ASSIGN PATIENT TO A WARD</h3>
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


  <Form.Group controlId="formGridAddress2">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control placeholder="DD/MM/YY" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Age</Form.Label>
    <Form.Control placeholder="Age" />
  </Form.Group>
  <Form.Row>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Wards</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option></option>
        <option>Emergency</option>
        <option>Maternity</option>
        <option>Accident</option>
        <option>Childrens</option>
        <option>Internsive Care</option>
      </Form.Control>
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Wards Number</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option></option>
        <option>Ward 1</option>
        <option>Ward 2</option>
        <option>Ward 3</option>
        <option>Ward 4</option>
        
      </Form.Control>
    </Form.Group>

    
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Rooms</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option></option>
        <option>Room 1</option>
        <option>Room 2</option>
        <option>Room 3</option>
        <option>Room 4</option>
        
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Beds</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option></option>
        <option>Bed 1</option>
        <option>Bed 2</option>
        <option>Bed 3</option>
        <option>Bed 4</option>
        
      </Form.Control>
    </Form.Group>


    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
  </Form>
  
  </div>
    
    )
}

export default Wards;
