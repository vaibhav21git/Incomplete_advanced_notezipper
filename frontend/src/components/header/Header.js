import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Nav.Link href="#action1">My notes</Nav.Link>
              <NavDropdown
                title="vaibhav sachdeva"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
