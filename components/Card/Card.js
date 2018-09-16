import React from 'react';
import Svg from '../Svg/Svg';

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
          <a href={props.link} className='card__link' target="_blank">
            <Svg className='svg__link' name='link' />
          </a>
        </div>
        <div className='card__link'>
          <a href={props.github} className='card__link' target="_blank">
          <Svg className='svg__github' name='github' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;
