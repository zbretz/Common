import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login = ({ usernameFn, passwordFn }) => {

  const handleId = (e) => {
    // console.log(e.target.value);
    usernameFn(e.target.value);
  }

  const handlePW = (e) => {
    // console.log(e.target.value);
    passwordFn(e.target.value);
  }

  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text" onChange={(e) => handleId(e)}></input>
        </label>
        <label>
          Password:
          <input type="text" onChange={(e) => handlePW(e)}></input>
        </label>
      </form>
    </div>
  )

}

export default Login;