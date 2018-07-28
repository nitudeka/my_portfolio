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
      </div>
    </div>
  )
}

export default Card;
