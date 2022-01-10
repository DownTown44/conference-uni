import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios'

import crypto from 'crypto';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';


const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [login, setLogin] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if(login) {
      loginUser();
    }
  }, [login])

  const handleCookie = () => {
    const user = {
      email: form.email,
      password: form.password
    }

    setCookie("user", user, {
      path: "/"
    });
  }

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const loginUser = () => {
    axios({
      method: 'post',
      url: 'http://localhost/conference-backend/login.php',
      headers: {
          'content-type': 'application/json'
      },
      data: form
    })
    .then(res => {
      if(res.data.result) {
        handleCookie();
      } else {
        alert("The password or the email is incorrect!")
        setLogin(false);
      }

    })
    .catch(err => console.log(err.message));
  }

  const submitForm = (event) => {
    event.preventDefault();
    let hashedPw = crypto.createHash('md5').update(form.password).digest('hex');
    setForm({
      ...form,
      password: hashedPw
    });
    setLogin(true);
  }

  return (
    <div className="loginForm">
      <form>
        <h1>User Login</h1>
        <div className="loginForm__field">
          <AiOutlineMail className="loginForm__field-icon" />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateForm}
            value={form.email} />
        </div>
        <div className="loginForm__field">
          <RiLockPasswordLine className="loginForm__field-icon" />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            onChange={updateForm}
            value={form.password} />
        </div>
        <button type="submit" onClick={(e) => submitForm(e)}>Login</button>
        <a>Forgot your password?</a>
      </form>
    </div>
  )
}

export default LoginForm
