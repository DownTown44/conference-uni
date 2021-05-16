import React, { useState } from 'react';

const CustomForm = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   switch(coount) {
  //     case 2:
  //       // code block
  //       break;
  //     case 3:
  //       // code block
  //       break;
  //     default:
  //       // code block
  //   }
  // }, [count])

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="customForm">
      <div className="customForm__stepCounter">
        <div className={"customForm__stepDot " + (count >= 1 ? "customForm__stepDot--active" : "")}>1</div>
        <div className={"customForm__stepDot " + (count >= 2 ? "customForm__stepDot--active" : "")}>2</div>
        <div className={"customForm__stepDot " + (count === 3 ? "customForm__stepDot--active" : "")}>3</div>
      </div>
      <form className="customForm__form">
        {/* FIRST PART */}
        {count === 1 ? (
          <>
            <div className="customForm__form-field">
              <label>E-mail</label>
              <input 
                type="email"
                className=""
                name="email"
                onChange={updateForm}
                value={form.email} />
            </div>
            <div className="customForm__form-field">
              <label>First Name</label>
              <input 
                type="text"
                className=""
                name="firstName"
                onChange={updateForm}
                value={form.firstName} />
            </div>
            <div className="customForm__form-field">
              <label>Last Name</label>
              <input 
                type="text"
                className=""
                name="lastName"
                onChange={updateForm}
                value={form.lastName} />
            </div>
          </>
        ) : null}

        {/* SECOND PART */}
        {count === 2 ? (
          <>
            <div className="customForm__form-field">
              <label>Username</label>
              <input 
                type="username"
                className=""
                name="username"
                onChange={updateForm}
                value={form.username} />
            </div>
            <div className="customForm__form-field">
              <label>Password</label>
              <input 
                type="password"
                className=""
                name="password"
                onChange={updateForm}
                value={form.password} />
            </div>
            <div className="customForm__form-field">
              <label>Confirm password</label>
              <input 
                type="password"
                className=""
                name="confirmPassword"
                onChange={updateForm}
                value={form.confirmPassword} />
            </div>
          </>
        ) : null}

        {/* THIRD PART */}
        {count === 3 ? (
          <div className="customForm__review">
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
      <div className="customForm__controls">
        <button
          className="customForm__controls-btn"
          onClick={() => setCount(prev => prev - 1)}
          disabled={count < 2}>
          Back
        </button>
        <button
          className="customForm__controls-btn"
          onClick={() => setCount(prev => prev + 1)}
          disabled={count > 2}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomForm;
