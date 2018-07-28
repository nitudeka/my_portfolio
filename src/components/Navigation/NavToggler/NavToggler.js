import React from 'react';
import classnames from 'classnames';

const NavToggler = (props) => {
  const navTogglerIcon = classnames(
    'nav__toggler', props.navShow ? 'nav__toggler-icon--active' : null
  )
  
  return (
    <div onClick={props.toggleNav} className={navTogglerIcon}>
      <span className='nav__toggler-icon'></span>
    </div>
  )
}

export default NavToggler;
