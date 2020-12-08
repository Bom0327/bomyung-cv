import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <section className="header-section">
      <div className="navbar-container">
        <div className="container">
          <Navbar dark expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link
                    style={{ color: "#ffc7c7" }}
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Works
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link className="nav-dropdown" to="/work-1">
                        (株)リクルートR&Dスタッヒィング
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link className="nav-dropdown" to="/work-2">
                        (株)ジャパンカラーズ
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link className="nav-dropdown" to="/work-3">
                        (株)コプロ・エンジニアード
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/bomyung-choi-350339141/"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a className="nav-link" href="https://github.com/Bom0327">
              <i className="fab fa-github"></i>
            </a>
          </Navbar>
        </div>
      </div>
    </section>
  );
}

export default NavigationBar;
