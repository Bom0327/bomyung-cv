import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="container">
        <Navbar dark expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/" style={{ color: "#ffc7c7" }}>Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">Contact</Link>
              </NavItem>
            </Nav>
            <a className="nav-link" href="https://www.linkedin.com/in/bomyung-choi-350339141/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="nav-link" href="https://github.com/Bom0327">
              <i className="fab fa-github"></i>
            </a>
          </Collapse>
          
        </Navbar>
      </div>
    </header>
  );
}

export default NavigationBar;
