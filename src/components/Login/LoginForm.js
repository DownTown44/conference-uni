import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

// TODO: Create a transparent modal so we can click out

const LoginForm = () => {
  return (
    <div className="loginForm">
      <form>
        <h1>User Login</h1>
        <div className="loginForm__field">
          <AiOutlineUser className="loginForm__field-icon" />
          <input 
            type="username"
            name="username"
            placeholder="Username" />
        </div>
        <div className="loginForm__field">
          <RiLockPasswordLine className="loginForm__field-icon" />
          <input 
            type="password"
            name="password"
            placeholder="Password" />
        </div>
        <button type="submit">Login</button>
        <a>Forgot your password?</a>
      </form>
    </div>
  )
}

export default LoginForm
