import React from 'react';
import { useState, useRef } from 'react';
import Login from './Login.jsx';
import { useAuth } from '../../contexts/AuthContext';

import './homepage.css';

const Homepage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, currentUser, userSignOut, signIn } = useAuth();

  const [login, setLogin] = useState(false);

  const clickLogin = () => {
    setLogin(true);

    // pass in username, password 
    // signIn(username, pw);
    // console.log('username', username);
    // console.log('password', pw);
  }

  // create sign in function using Lenora's auth function signUp
  

  return (
  <div className='home'>
    <h1 className='title'>Apply.io</h1>
      {login ? <Login usernameFn={setUsername} passwordFn={setPassword}/> : <></>}
      {/* <form>
        <label>
          Username:
          <input type="text" ref={username}></input>
        </label>
        <label>
          Password:
          <input type="text" ref={passwordRef}></input>
        </label>
      </form> */}
      <div className='buttons'>
        {/* <button className='btn' onClick={() => clickLogin(username.current.value, passwordRef.current.value)}>Log In</button> */}
        <button className='btn' onClick={() => clickLogin()}>Log In</button>
        <button className='btn'>Sign Up</button>
      </div>
  </div>
  )
}

export default Homepage;