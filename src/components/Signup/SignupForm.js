import React, { useState } from 'react';

const SignupForm = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const [count, setCount] = useState(1);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
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
            <button
              className="ctaButton"
              type="submit">
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
