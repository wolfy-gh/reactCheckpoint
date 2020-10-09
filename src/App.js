import React from 'react';
import './App.css';
import { Button, Form, Col, Container, Navbar, Nav, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Register</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>

      <header className="App-header">
        <Container>
          <Form className="form-container">
            <h1 className="title">Register</h1>
            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="textn" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Adresse" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City " />
              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" defaultValue="Country">
                  <option>Choose...</option>
                  <option>Tunisia</option>
                  <option>Morroco</option>
                  <option>Algeria</option>
                  <option>Lybia</option>
                </Form.Control>
              </Form.Group>
              <Form.Group >
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Zip Code"/>
              </Form.Group>
            </Form.Row>
            <hr></hr>
            <Button variant="success" type="submit" size="lg" block className="b-btn">
              Submit
          </Button>
          </Form>
        </Container>
      </header>
    </div>

  );
}

export default App;
