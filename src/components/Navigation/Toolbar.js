import React, { useState, useEffect }from 'react';

import NavigationItems from './NavigationItems'; 
import LoginForm from '../Login/LoginForm';
import Backdrop from '../Backdrop/Backdrop';

const Toolbar = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open])

  const Login = (
    <>
      <LoginForm />
      <Backdrop show={open} onClick={() => setOpen(!open)}/>
    </>
  )

  return (
    <header className="toolbar">
      {/* TODO: Insert logo */}
      <div className="toolbar__logo">

      </div>
      <nav className="navigationDesktop">
        <NavigationItems openLogin={() => setOpen(!open)}/>
      </nav>
      {open && Login}
      {/* TODO: Insert darkmode button */}
    </header>
  );
}
export default Toolbar;