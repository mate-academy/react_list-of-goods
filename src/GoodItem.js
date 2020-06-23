/* eslint-disable no-console */
import React from 'react';
import { ShapeGoodsItem } from './Shapes';

export const GoodItem = (props) => {
  console.log(props);

  return (
    <li>{props.item}</li>
  );
};

GoodItem.propTypes = ShapeGoodsItem.isRequired;
