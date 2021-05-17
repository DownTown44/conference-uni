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
          <AiOutlineUser />
          <input 
            type="username"
            name="username" />
        </div>
        <div className="loginForm__field">
          <RiLockPasswordLine />
          <input 
            type="password"
            name="password" />
        </div>
        <button type="submit">Login</button>
        <a>Forgot your password?</a>
      </form>
    </div>
  )
}

export default LoginForm
