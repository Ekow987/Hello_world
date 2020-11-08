import React from 'react';
 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';


   const Navigation=()=> {
    
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home">HOSPITAL MANAGEMENT SYSTEM</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to="/">Home</Link></Nav.Link>
      <Nav.Link> <Link to="/Addrecord">Add patient</Link></Nav.Link>
      <Nav.Link> <Link to="/Drugs">Drug prescription</Link></Nav.Link>
      <Nav.Link> <Link to="/UpdatePatient">Update Patient</Link></Nav.Link>
      <Nav.Link> <Link to="/Report">PatientReport</Link></Nav.Link>
      <Nav.Link> <Link to="/Wards">Hospital Wards</Link></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>  
        </div>
    );
}

export default Navigation;
