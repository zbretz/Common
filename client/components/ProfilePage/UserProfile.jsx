import React, { useState, useEffect } from 'react';
import './profile.css';

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
      <div className="user_details">
        <div className="profile_pic">
          <p></p>
        </div>
        <div className="user_info">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.experience} years of experience</p>
          <p>{user.github}</p>
          <p>{user.linkedIn}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;