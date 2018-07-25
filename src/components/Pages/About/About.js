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
          <h2 className='about-heading-primary'>Hi, I am Nitu</h2>
          <p className='about-paragraph'>Hello my name is <span className='bold'>Nitu Deka</span>. I live in the charming city of India named Tezpur. Favourite sport: Football. You can find me on my desk, coding all the day. If you want to give me a chance to show you my skills by giving me projects, just email me at <span className='bold'>nitumonideka327@gmail.com</span></p>
        </div>
      </div>
    </div>
  )
}

export default About;
