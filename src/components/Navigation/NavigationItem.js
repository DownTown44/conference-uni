import React from 'react';
import {Link} from 'react-router-dom';

const NavigationItem = (props) => (
  <li className='navigationItems__item'>
    <Link to={props.link}>
      <a>{props.children}</a>
    </Link>
  </li>
);

export default NavigationItem;