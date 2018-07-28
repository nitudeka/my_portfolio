import React from 'react';
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
        <li onClick={() => props.routeChange('home')} className='nav__item'>
          <p className='nav__link'>Home</p>
        </li>
        <li onClick={() => props.routeChange('myProjects')} className='nav__item'>
          <p className='nav__link'>Projects</p>
        </li>
        <li onClick={() => props.routeChange('about')} className='nav__item'>
          <p className='nav__link'>About Me!</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
