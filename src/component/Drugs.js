import React from 'react';
import Card from 'react-bootstrap/Card';
import Doc from '../img/imgd1.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
function Drugs() {
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
     <Form className="for">
         <h3>SELECT A DRUG</h3>
  <Form.Group as={Col} controlId="formGridState" >
      <Form.Label>Sickness</Form.Label>
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
      <Form.Label>Prescribed Drug</Form.Label>
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

export default Drugs;
