import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const CreateProfile = () => {
  return (
    <div>
      <h1>Create your profile</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control type="name" placeholder="Full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default CreateProfile;