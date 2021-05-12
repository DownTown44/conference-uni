import React from 'react';

const NavigationItem = (props) => (
  <li className='navigationItem'>
    <a>{props.children}</a>
  </li>
);

export default NavigationItem;