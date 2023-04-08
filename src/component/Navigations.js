import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" className="color">
          ALBYTECH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Laptops" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Laptops">Hp</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/Leno">Lenovo</Link></NavDropdown.Item>
              <NavDropdown.Item href="">Dell</NavDropdown.Item>
              <NavDropdown.Item href="#">Asus</NavDropdown.Item>
              <NavDropdown.Item href="">Acer</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Phones" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Phones">Iphones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="">Sumsung Galaxy</NavDropdown.Item>
              <NavDropdown.Item href="#">Techno</NavDropdown.Item>
              <NavDropdown.Item href="">Infinix</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Acessories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">Pendrive</NavDropdown.Item>
              <NavDropdown.Item href="#">Harddisk</NavDropdown.Item>
              <NavDropdown.Item href="">Chargers</NavDropdown.Item>
              <NavDropdown.Item href="">Phone Covers</NavDropdown.Item>
              <NavDropdown.Item href="">Laptop Chargers</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            {/* <Nav.Link> <Link to="/UpdatePatient">Update Patient</Link></Nav.Link>
      <Nav.Link> <Link to="/Report">PatientReport</Link></Nav.Link>
      <Nav.Link> <Link to="/Wards">Hospital Wards</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
