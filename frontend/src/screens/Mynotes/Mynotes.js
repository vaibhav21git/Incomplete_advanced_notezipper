import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mainscreen from "../../components/Mainscreen";
import { useEffect, useState } from "react";
import axios from "axios";

function Mynotes() {
  const [notes, setnotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  // we cannot call our api inside the useeffect therrfore we need to make a separate function
  const fetchnotes = async () => {
    const { data } = await axios.get("/api/notes");

    setnotes(data);
  };

  useEffect(() => {
    fetchnotes();
  }, []);

  return (
    <Mainscreen title="Welcome Back">
      <Link to="/createnote">
        <Button styles={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id} defaultActiveKey={["0"]}>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    // so that it takes full space and pushes edit and delete to right side
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button>
                    <Link to={`/note/${note._id}`}>Edit</Link>
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category - {note.category} </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on specific date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </Mainscreen>
  );
}

export default Mynotes;
