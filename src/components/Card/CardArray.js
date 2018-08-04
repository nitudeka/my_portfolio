import React from 'react';
import Card from './Card';
import {cardOptions} from './CardOptions';

const CardArray = () => {  
  return (
    cardOptions.map((card, i) => {
      return (
        <Card
          key={i}
          projectDescription={cardOptions[i].projectDescription}
          cardNo={cardOptions[i].cardNo}
          projectName={cardOptions[i].projectName}
          link={cardOptions[i].link}
          github={cardOptions[i].github}
        />
      )
    })
  )
}

export default CardArray;
