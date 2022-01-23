import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateProfile = () => {

  // states to keep track of input information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  return (
    <div>
      <h1>Create your profile</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control type="name" placeholder="Full name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="githubLink">
          <Form.Label>Github Link:</Form.Label>
          <Form.Control type="github" placeholder="Your Github Profile Link" onChange={(e) => setGithub(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="linkedInLink">
          <Form.Label>LinkedIn Link:</Form.Label>
          <Form.Control type="linkedInLink" placeholder="Your LinkedIn Link" onChange={(e) => setLinkedIn(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="resume">
          <Form.Label>Upload Resume</Form.Label>  
          <p>Work in Progress</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateProfile;