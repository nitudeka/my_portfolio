import React from 'react';
import avatar from '../../../assets/img/about-avatar.jpg';
import Svg from '../../Svg/Svg';

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
          <p className='about__paragraph'>I am a fullstack web developer who has a great ability of problem solving. I love everything about technology. I spend most of the time on a day in coding, trying to create beautiful content, like one you are viewing now. Wanna say Hi ? Just email me at nitumonideka327@gmail.com</p>
        </div>
        <div className='about__accounts'>
          <a href="https://www.facebook.com/profile.php?id=100008786917030&ref" rel="noopener noreferrer" target="_blank">
            <Svg className='svg__about-facebook' name='facebook' />
          </a>
          <a href="https://github.com/nitudeka" rel="noopener noreferrer" target="_blank">
            <Svg className='svg__about-github' name='github' />
          </a>
          <a href="https://www.linkedin.com/in/nitu-deka-12bb42160/" rel="noopener noreferrer" target="_blank">
            <Svg className='svg__about-linkedin' name='linkedin' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;
