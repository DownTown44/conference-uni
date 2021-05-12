import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationItems = (props) => (
  <ul className='navigationItems'>
    <NavigationItem>Home</NavigationItem>
    <NavigationItem>Register</NavigationItem>
    <NavigationItem>FAQ</NavigationItem>
    <NavigationItem>About</NavigationItem>
    <NavigationItem>Contact</NavigationItem>
    {/* TODO: Conditional rendering */}
    <NavigationItem>Sing in</NavigationItem>
    <NavigationItem>Sing up</NavigationItem>
    {/* Log out */}
  </ul>
);

export default NavigationItems;
