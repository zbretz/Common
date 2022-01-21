import React from 'react';
import { useState } from 'react';
import Login from './Login.jsx';

import './homepage.css';

const Homepage = () => {

  const [login, setLogin] = useState(false);

  const clickLogin = () => {
    setLogin(true);
  }

  return (
  <div className='home'>
    <h1 className='title'>Apply.io</h1>
      {login ? <Login /> : <></>}
      <div className='buttons'>
        <button className='btn' onClick={() => clickLogin()}>Log In</button>
        <button className='btn'>Sign Up</button>
      </div>
  </div>
  )
}

export default Homepage;