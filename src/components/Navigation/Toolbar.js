import React, { useState }from 'react';

import NavigationItems from './NavigationItems'; 
import LoginForm from '../Login/LoginForm';
import Backdrop from '../Backdrop/Backdrop';
import { GiBreakingChain } from 'react-icons/gi';

const Toolbar = (props) => {
  const Login = (
    <>
      <LoginForm />
      <Backdrop show={props.open} onClick={props.openLogin}/>
    </>
  )

  return (
    <header className="toolbar">
      <GiBreakingChain className="toolbar__logo"/>
      <div className="toolbar__menu" onClick={props.openSidedrawer}>Menu</div>
      <nav className="navigationDesktop">
        <NavigationItems openLogin={props.openLogin}/>
      </nav>
      {props.open && Login}
      {/* TODO: Insert darkmode button */}
    </header>
  );
}
export default Toolbar;