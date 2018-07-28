import React from 'react';
import { CardArray } from './CardOptions';
import Card from '../Card/Card';

const CardArray = (props) => {
  CardArray.map((t, i) => {
    console.log(t, i);
    return <Card />
  })
}

export default CardArray;
