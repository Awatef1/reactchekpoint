import './App.css';

import {Button, Form, FormGroup, FormLabel, FormText, FormCheck, FormControl, Row, Col}from 'react-bootstrap'

function App() {
  return (
      <div className="App">
      
          <div className="container">
            <h1 className="text-center"> WELCOME </h1>
          </div>
     
      <div className="container">
          <Form>
            <Row >
                <Col md>
                <Form.Label>First name</Form.Label>
                <Form.Control placeholder="First name" />
                </Col>
                <Col md >
                <Form.Label>Last name</Form.Label>
                <Form.Control placeholder="Last name" />
                </Col>
            </Row>
      
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Example@gmail.com" />
              <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="Address" placeholder="Nabeul 8000" />
          </Form.Group>
      <Row>
      <Col md xs={6}>
      <Form.Label>City</Form.Label>
        <Form.Control placeholder="City" />
      </Col>
      <Col md>
      <Form.Label>State</Form.Label>
        <Form.Control placeholder="State" />
      </Col>
      <Col md >
      <Form.Label> zip </Form.Label>
        <Form.Control placeholder="Zip" />
      </Col>
  </Row>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btn-log btn-dark btn-black">
  Submit
  </Button>
  
</Form>


    </div>
    
</div>
  );
}

export default App;
