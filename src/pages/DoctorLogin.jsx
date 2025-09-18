import { useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";


export default function LoginForm() {
  const [role, setRole] = useState("patient"); // patient or doctor
  const [userType, setUserType] = useState("existing"); // new or existing

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-center mb-4">
              {role === "patient" ? "Patient Login" : "Doctor Login"}
            </h3>

            {/* Role Switch */}
            <div className="d-flex justify-content-center mb-3">
              <Button
                variant={role === "patient" ? "primary" : "outline-primary"}
                className="me-2"
                onClick={() => setRole("patient")}
              >
                Patient
              </Button>
              <Button
                variant={role === "doctor" ? "primary" : "outline-primary"}
                onClick={() => setRole("doctor")}
              >
                Doctor
              </Button>
            </div>

            {/* New / Existing User Tabs */}
            <Nav variant="tabs" defaultActiveKey="existing" className="mb-3">
              <Nav.Item>
                <Nav.Link
                  eventKey="existing"
                  active={userType === "existing"}
                  onClick={() => setUserType("existing")}
                >
                  Existing User
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="new"
                  active={userType === "new"}
                  onClick={() => setUserType("new")}
                >
                  New User
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Form>
              {/* Username */}
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter strong password" />
              </Form.Group>

              {/* Remember Me + Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember Me" />
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Login
                </Button>
                {userType === "new" && (
                  <Button variant="outline-primary" type="button">
                    Signup
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
