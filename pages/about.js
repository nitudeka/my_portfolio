import React from 'react';
import Layout from '../components/Layout';
import Svg from '../components/Svg/Svg';

const About = () => {
  return (
    <Layout>
      <div className='about'>
        <div className='about__background'></div>
        <div className='about__content'>
          <div className='avatar'>
            <img src='../static/img/about-avatar.jpg' className='avatar__img' alt='avatar' />
          </div>
          <h4 className='about__heading'>Nitu Deka</h4>
          <div className='about__paragraphs'>
            <p className='about__paragraph'>
              Hey, you are here it means that you want to know about me. Let me introduce myself!
            </p>
            <p className='about__paragraph'>
              I am from India. My complete name is <span className='bold-font'>Nitu Moni Deka</span>, a self-taught web developer with an addiction to mastering and adopting new skills. I want to work on complex tasks because I want to test and sharpen my skills.
            </p>
            <p className='about__paragraph'>
              I want to satisfy my clients not just by doing what they say me to do, but by adding a little bit more from me to make the project even more beautiful.
            </p>
            <p className='about__paragraph'>
              Like what you see? You can check me out on social media or can email me at <span className='bold-font'>nitumonideka327@gmail.com</span>
            </p>
          </div>
          <div className='about__accounts'>
            <a href="https://www.facebook.com/profile.php?id=100008786917030&ref" rel="noopener noreferrer" target="_blank">
              <Svg className='svg__about-facebook accounts-link' name='facebook' />
            </a>
            <a href="https://github.com/nitudeka" rel="noopener noreferrer" target="_blank">
              <Svg className='svg__about-github accounts-link' name='github' />
            </a>
            <a href="https://www.linkedin.com/in/nitu-deka-12bb42160/" rel="noopener noreferrer" target="_blank">
              <Svg className='svg__about-linkedin accounts-link' name='linkedin' />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;