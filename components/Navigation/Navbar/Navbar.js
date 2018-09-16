import React from 'react';
import Link from 'next/link';
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
          <Link href='/'><p className='nav__link'>Home</p></Link>
        </li>
        <li className='nav__item nav__item--2'>
          <Link href='/projects'><p className='nav__link'>Projects</p></Link>
        </li>
        <li className='nav__item nav__item--3'>
          <Link href='/about'><p className='nav__link'>About Me</p></Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
