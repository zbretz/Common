import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

// Component to grab user's username and password
const CreateAccountInfo = () => {

  // figure out useRef in order to not store username and pw as state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, currentUser, userSignOut, signIn } = useAuth();

  // function to register username and password
  const handleRegister = (e) => {
    e.preventDefault();

    console.log('username entered', username);
    console.log('password entered', password);
    signUp(username, password);
  }

  return (
    <div>
      <h3>Create Account:</h3>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleRegister(e)}>
          Register
        </Button>
      </Form>
    </div>
  )

}

export default CreateAccountInfo;