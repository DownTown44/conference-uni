import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className={`navigationItems__item  ${props.location === props.link ? 'navigationItems__item--active' : ""}`}>
      <Link 
        to={props.link}
        onClick={props.onClick}>
        {props.children}
      </Link>
    </li>
  );
}

export default NavigationItem;