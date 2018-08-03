import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <div className={`card__side card__front card__front--${props.cardNo}`}>
        <h2 className='project__heading'>
          {props.projectName}
        </h2>
        <p className='project__description'>
          {props.projectDescription}
        </p>
        <div className='project__link'>
        </div>
      </div>
      <div className={`card__side card__back card__back--${props.cardNo}`}>
        <div className='card__link'>
          <svg className='link' version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>view project</title>
            <path className='path' d="M18 7.762v-7.762l12 12-12 12v-7.932c-13.961-0.328-13.362 9.493-9.808 15.932-8.772-9.482-6.909-24.674 9.808-24.238z"></path>
          </svg>
        </div>
        <div className='card__project'>
        </div>
      </div>
    </div>
  )
}

export default Card;
