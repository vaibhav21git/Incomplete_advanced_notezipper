import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">One safe place for all your notes.</p>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Sign Up
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Landingpage;
