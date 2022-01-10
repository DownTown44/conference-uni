import React from 'react';
import { useLocation } from 'react-router-dom';

import NavigationItem from './NavigationItem';

const NavigationItems = (props) => {
  const location = useLocation().pathname;

  return (
    <ul className='navigationItems'>
      <NavigationItem link='/' location={location}>Home</NavigationItem>
      <NavigationItem link='/conference' location={location}>Conference</NavigationItem>
      {/* <NavigationItem location={location}>FAQ</NavigationItem> */}
      {/* <NavigationItem location={location}>About</NavigationItem> */}
      <NavigationItem link='/contact' location={location}>Contact</NavigationItem>
      {/* TODO: Conditional rendering sign up and sign in*/}
      {props.isLoggedIn ? 
        <>
          <NavigationItem link='/files' location={location}>Files</NavigationItem>
          <NavigationItem onClick={props.logout} location={'/'}>Log out</NavigationItem>
        </>
      :
        <>
          <NavigationItem onClick={props.openLogin} location={null}>Sign in</NavigationItem>
          <NavigationItem link='/signup' location={location}>Sign up</NavigationItem>
        </>
      }
    </ul>
  );
}
export default NavigationItems;
