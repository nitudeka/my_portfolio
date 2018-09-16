import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import NavToggler from '../NavToggler/NavToggler';

const Navbar = (props) => {
  const navList = classnames(
    'nav__list', props.navShow ? 'nav--show' : 'nav--hide'
  );
  
  return (
    <div>
      <NavToggler navShow={props.navShow} toggleNav={props.toggleNav} />
      <ul className={navList}>
        <li className='nav__item nav__item--1'>
          <p className='nav__link'><Link onClick={props.toggleNav} className='nav__Link' to='/'>Home</Link></p>
        </li>
        <li className='nav__item nav__item--2'>
          <p className='nav__link'><Link onClick={props.toggleNav} className='nav__Link' to='/projects'>Projects</Link></p>
        </li>
        <li className='nav__item nav__item--3'>
          <p className='nav__link'><Link onClick={props.toggleNav} className='nav__Link' to='/about'>About Me!</Link></p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
