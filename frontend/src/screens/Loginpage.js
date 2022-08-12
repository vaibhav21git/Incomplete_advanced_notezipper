import React, { useState } from "react";
import Mainscreen from "../components/Mainscreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Loginpage.css";
import axios from "axios";

function Loginpage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setloading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringfy(data));

      setloading(false);
    } catch (error) {
      seterror(error.response.data.message);
    }
  };

  return (
    <Mainscreen title="LOGIN">
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </Mainscreen>
  );
}

export default Loginpage;
