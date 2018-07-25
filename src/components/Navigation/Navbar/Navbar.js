import React from 'react';
import './Navbar.css';
import classnames from 'classnames';
import NavToggler from '../NavToggler/NavToggler';

const Navbar = (props) => {
  const navList = classnames('nav-list', props.navShow ? 'nav-show' : 'nav-hide');
  const navItem = classnames('nav-item', props.navShow ? 'nav-item-show' : null);
  
  return (
    <div>
      <NavToggler navShow={props.navShow} toggleNav={props.toggleNav} />
      <ul className={navList}>
        <li onClick={() => props.routeChange('home')} className={navItem}>
          <p className='nav-link'>Home</p>
        </li>
        <li onClick={() => props.routeChange('myProjects')} className={navItem}>
          <p className='nav-link'>Projects</p>
        </li>
        <li onClick={() => props.routeChange('about')} className={navItem}>
          <p className='nav-link'>About Me!</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
