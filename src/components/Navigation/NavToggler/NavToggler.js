import React from 'react';
import './NavToggler.css';
import classnames from 'classnames';

const NavToggler = (props) => {
  const navTogglerIcon = classnames('nav-toggler', props.navShow ? 'nav-toggler-icon-active' : null)
  
  return (
    <div onClick={props.toggleNav} className={navTogglerIcon}>
      <span className='nav-toggler-icon'></span>
    </div>
  )
}

export default NavToggler;