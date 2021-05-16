import React, { useState } from 'react';

const CustomForm = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    repeatPassword: ""
  })

  const [count, setCount] = useState(1);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="customForm">
      <div className="customForm__stepCounter">

      </div>
      <form>
        {/* FIRST PART */}
        {count === 1 ? (
          <>
            <div className="">
              <label>Email</label>
              <input 
                type="email"
                className=""
                name="email"
                onChange={updateForm}
                value={form.email} />
            </div>
            <div className="">
              <label>First Name</label>
              <input 
                type="text"
                className=""
                name="firstName"
                onChange={updateForm}
                value={form.firstName} />
            </div>
            <div className="">
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
            <div className="">
              <label>Username</label>
              <input 
                type="username"
                className=""
                name="username"
                onChange={updateForm}
                value={form.username} />
            </div>
            <div className="">
              <label>Password</label>
              <input 
                type="password"
                className=""
                name="firstName"
                onChange={updateForm}
                value={form.password} />
            </div>
            <div className="">
              <label>Repeat password</label>
              <input 
                type="password"
                className=""
                name="lastName"
                onChange={updateForm}
                value={form.repeatPassword} />
            </div>
          </>
        ) : null}

        {/* THIRD PART */}
        {count === 3 ? (
          <div>
            <p>Please review your data</p>
            <p>Email: <span>{form.email}</span></p>
            <p>First name: <span>{form.firstName}</span></p>
            <p>Last name: <span>{form.lastName}</span></p>
            <p>Username: <span>{form.username}</span></p>
            <button 
              className="customForm__submitbtn"
              type="submit">
              Submit</button>
          </div>
        ) : null}
      </form>
      <div className="customForm__controls">
        <button 
          onClick={() => setCount(prev => prev - 1)}
          disabled={count < 2}>
          Back
        </button>
        <button 
          onClick={() => setCount(prev => prev + 1)}
          disabled={count > 2}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomForm;
