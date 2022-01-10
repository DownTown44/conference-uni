import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import crypto from 'crypto';

const SignupForm = () => {
  let history = useHistory();
  const [cookies, setCookie] = useCookies(["user"]);
  const [register, setRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    telNumber: "",
    institution: "",
    position: "",
    academicDegree: "",
    role: "Guest"
  })

  useEffect(() => {
    if(register) {
      registerUser();
    }
  }, [register])


  const [count, setCount] = useState(1);
  const [isPresenter, setIsPresenter] = useState(false);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const asPresenter = () => {
    setForm({
      ...form,
      role: "Presenter"
    });
    setIsPresenter(true);
  }

  const handleCookie = () => {
    const user = {
      email: form.email,
      password: form.password
    }

    setCookie("user", user, {
      path: "/"
    });
  }

  const registerUser = () => {
    axios({
      method: 'post',
      url: 'http://localhost/conference-backend/register.php',
      headers: {
          'content-type': 'application/json'
      },
      data: form
    })
    .then(res => {
      handleCookie();
      history.push('/');
    })
    .catch(err => console.log(err.message));
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(form.password === form.confirmPassword) {
      let hashedPw = crypto.createHash('md5').update(form.password).digest('hex');
      setForm({
        ...form,
        password: hashedPw,
        confirmPassword: hashedPw
      });
      setRegister(true);
    }
  }

  return (
    <div className="signupForm">
      <div className="signupForm__stepCounter">
        <div className={"signupForm__stepDot " + (count >= 1 ? "signupForm__stepDot--active" : "")}>1</div>
        <div className={"signupForm__stepDot " + (count >= 2 ? "signupForm__stepDot--active" : "")}>2</div>
        <div className={"signupForm__stepDot " + (count === 3 ? "signupForm__stepDot--active" : "")}>3</div>
      </div>
      <form className="signupForm__form">
        {/* FIRST PART */}
        {count === 1 ? (
          <>
            <div className="signupForm__form-field">
              <label>E-mail</label>
              <input 
                type="email"
                name="email"
                onChange={updateForm}
                value={form.email} />
            </div>
            <div className="signupForm__form-field">
              <label>First Name</label>
              <input 
                type="text"
                name="firstName"
                onChange={updateForm}
                value={form.firstName} />
            </div>
            <div className="signupForm__form-field">
              <label>Last Name</label>
              <input 
                type="text"
                name="lastName"
                onChange={updateForm}
                value={form.lastName} />
            </div>
          </>
        ) : null}

        {/* SECOND PART */}
        {count === 2 ? (
          <>
            {form.password !== form.confirmPassword ? (
              <p className="errorMessage">The passwords are not matching!</p>
            ): null}
            <div className="signupForm__form-field">
              <label>Username</label>
              <input 
                type="username"
                name="username"
                onChange={updateForm}
                value={form.username} />
            </div>
            <div className="signupForm__form-field">
              <label>Password</label>
              <input 
                type="password"
                name="password"
                onChange={updateForm}
                value={form.password} />
            </div>
            <div className="signupForm__form-field">
              <label>Confirm password</label>
              <input 
                type="password"
                name="confirmPassword"
                onChange={updateForm}
                value={form.confirmPassword} />
            </div>
            {!isPresenter ? 
              <button
                className="ctaButton--small"
                onClick={() => asPresenter()}>
                Register as presenter
              </button>
            : null}

            {isPresenter ? (
              <>
                <div className="signupForm__form-field">
                  <label>Phone number</label>
                  <input 
                    type="text"
                    name="telNumber"
                    onChange={updateForm}
                    value={form.telNumber} />
                </div>
                <div className="signupForm__form-field">
                  <label>Institution</label>
                  <input 
                    type="text"
                    name="institution"
                    onChange={updateForm}
                    value={form.institution} />
                </div>
                <div className="signupForm__form-field">
                  <label>Position</label>
                  <input 
                    type="text"
                    name="position"
                    onChange={updateForm}
                    value={form.position} />
                </div>
                <div className="signupForm__form-field">
                  <label>Academic Degree</label>
                  <input 
                    type="text"
                    name="academicDegree"
                    onChange={updateForm}
                    value={form.academicDegree} />
                </div>
              </>
            ) : null}

          </>
        ) : null}

        {/* THIRD PART */}
        {count === 3 ? (
          <div className="signupForm__review">
            <p>Please review your data</p>
            <p>Email: <span>{form.email}</span></p>
            <p>First name: <span>{form.firstName}</span></p>
            <p>Last name: <span>{form.lastName}</span></p>
            <p>Username: <span>{form.username}</span></p>
            <p>Phone number: <span>{form.telNumber}</span></p>
            <p>Institution: <span>{form.institution}</span></p>
            <p>Position: <span>{form.position}</span></p>
            <p>Academic Degree: <span>{form.academicDegree}</span></p>
            <button
              className="ctaButton"
              type="submit"
              onClick={(e) => submitForm(e)}>
              Submit</button>
          </div>
        ) : null}
      </form>
      <div className="signupForm__controls">
        <button
          className="signupForm__controls-btn"
          onClick={() => setCount(prev => prev - 1)}
          disabled={count < 2}>
          Back
        </button>
        <button
          className="signupForm__controls-btn"
          onClick={() => setCount(prev => prev + 1)}
          disabled={count > 2}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
