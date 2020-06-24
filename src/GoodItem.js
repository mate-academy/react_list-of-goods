/* eslint-disable no-console */
import React from 'react';
import { ShapeGoodsItem } from './Shapes';

export const GoodItem = (props) => {
  const display = (props.display) ? 'block' : 'none';

  return (
    <li style={{ display: `${display}` }}>{props.item}</li>
  );
};

GoodItem.propTypes = ShapeGoodsItem.isRequired;
