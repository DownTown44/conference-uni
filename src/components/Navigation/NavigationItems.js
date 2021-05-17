import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationItems = (props) => (
  <ul className='navigationItems'>
    <NavigationItem link='/'>Home</NavigationItem>
    <NavigationItem>Conference</NavigationItem>
    <NavigationItem>FAQ</NavigationItem>
    <NavigationItem>About</NavigationItem>
    <NavigationItem link='/contact'>Contact</NavigationItem>
    {/* TODO: Conditional rendering */}
    <NavigationItem>Sign in</NavigationItem>
    <NavigationItem link='/signup'>Sign up</NavigationItem>
    {/* Log out */}
  </ul>
);

export default NavigationItems;
