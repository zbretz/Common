import React from 'react';

const Login = () => {

  const username = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text"></input>
        </label>
        <label>
          Password:
          <input type="text"></input>
        </label>
      </form>
    </div>
  )

}

export default Login;