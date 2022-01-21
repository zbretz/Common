import React, { useState, useEffect } from 'react';

const axios = require('axios');

const UserProfile = () => {

  const [user, setUser] = useState('');

  useEffect(() => {
    getUserInfo();
  }, [])

  const getUserInfo = () => {
    axios.get('data.json')
    .then((data) => {
      setUser(data.data);
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default UserProfile;