import React from 'react';
import avatar from '../../../assets/img/about-avatar.jpg';

const About = (props) => {
  return (
    <div className='about'>
      <div className='about__background'></div>
      <div className='about__container'>
        <div className='avatar'>
          <img src={avatar} className='avatar__img' alt='avatar' />
        </div>
        <div className='about__content'>
          <span className='about__name'>Nitu Deka</span>
          <h2 className='about__heading'>Hi, I am Nitu</h2>
          <p className='about__paragraph'>I am a fullstack web developer who has the passion of coding. I live in the beautiful city of India named Tezpur. I love everything about technology. I spend most of the time on a day in coding, trying to create beautiful content</p>
        </div>
      </div>
    </div>
  )
}

export default About;
