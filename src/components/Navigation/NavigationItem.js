import React from 'react';

const NavigationItem = (props) => (
  <li className='navigationItems__item'>
    <a>{props.children}</a>
  </li>
);

export default NavigationItem;