import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

function CustomNavbar({ Fx }) {
  const handleChange = (e) => {
    Fx(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/OrgPlat"> Organismes</Link>
        <Button variant="outline-success">Encadrants</Button>
        <Button variant="outline-success">Étudiants</Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="ANNÉE UNIVERSITAIRE"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">2022-2023</NavDropdown.Item>
              <NavDropdown.Item href="#action3">2021-2022</NavDropdown.Item>
              <NavDropdown.Item href="#action3">2020-2021</NavDropdown.Item>
              <NavDropdown.Item href="#action3">2019-2020</NavDropdown.Item>
              <NavDropdown.Item href="#action3">2018-2019</NavDropdown.Item>
              <NavDropdown.Item href="#action3">2017-2018</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Toutes les années
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FILIÉRE" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Architecture</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Design</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Informatique</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Droit</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Gestion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Toutes les filiéres
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="NIVEAU" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Architecture 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Architecture 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Architecture 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Architecture 4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Architecture 5
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Architecture 6
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Tous les niveaux
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
