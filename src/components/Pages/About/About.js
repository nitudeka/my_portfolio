import React from 'react';
import './About.css';
import avatar from '../../../assets/img/about-avatar.jpg';

const About = (props) => {
  return (
    <div className='about'>
      <div className='about-bg'></div>
      <div className='about-container'>
        <div className='avatar'>
          <img src={avatar} className='avatar-img' alt='avatar' />
        </div>
        <div className='about-content'>
          <h2 className='about-heading-primary'>Nitu Deka</h2>
          <h6 className='about-heading-secondary'>Web Developer</h6>
          <p className='about-paragraph'>Hello my name is Nitu Deka. I am a self taught web developer who is soo passionate about programming.</p>
        </div>
      </div>
    </div>
  )
}

export default About;