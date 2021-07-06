import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import "./App.css";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState({ empty: true });

  function enviar() {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then(function (datos) {
        setFeedback(datos);
        setTimeout(() => {
          setFeedback({ empty: true });
        }, 5000);
      });
  }

  

  return (
    <Row>
      <Col></Col>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => enviar()}>
            Enviar
          </Button>
          <Form.Group>
            {feedback.empty ? (
              <h1> </h1>
            ) : (
              <Alert variant={feedback.logged ? "success" : "danger"}>
                {feedback.mensaje}
              </Alert>
            )}
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default App;