import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <NavLink to={'/'}>Home</NavLink>
        <a href={'/contact'}>Contact</a>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/support'}>Support</NavLink>
    </div>
  )
}

export default Navigation