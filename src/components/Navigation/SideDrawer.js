import React from 'react';

import NavigationItems from './NavigationItems';
import LoginForm from '../Login/LoginForm';
import Backdrop from '../Backdrop/Backdrop';
import { GiBreakingChain } from 'react-icons/gi';

const SideDrawer = (props) => {
  const sideDrawer = (
    <div className="sideDrawer">
      <GiBreakingChain className="sideDrawer__logo"/>
      <nav>
        <NavigationItems openLogin={props.openLogin}/>
      </nav>
    </div>
  )

  const Login = (
    <>
      <LoginForm />
      <Backdrop show={props.login} onClick={props.openLogin}/>
    </>
  )

  return (
    <>
    {props.login && Login}
    {props.open && sideDrawer}
    {props.open && <Backdrop show={props.open} onClick={props.toggleSideDrawer}/>}
    </>
  )
}

export default SideDrawer;
