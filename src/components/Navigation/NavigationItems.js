import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationItems = (props) => (
  <ul className='navigationItems'>
    <NavigationItem>Home</NavigationItem>
    <NavigationItem>Conference</NavigationItem>
    <NavigationItem>FAQ</NavigationItem>
    <NavigationItem>About</NavigationItem>
    <NavigationItem>Contact</NavigationItem>
    {/* TODO: Conditional rendering */}
    <NavigationItem>Sign in</NavigationItem>
    <NavigationItem>Sign up</NavigationItem>
    {/* Log out */}
  </ul>
);

export default NavigationItems;
