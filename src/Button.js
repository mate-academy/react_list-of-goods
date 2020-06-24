import React from 'react';
import { ShapeGoodsItem } from './Shapes';

export const Button = props => (
  <button
    type="button"
    onClick={() => props.action[1]()}
    style={{ display: props.display }}
  >
    {props.action[0]}
  </button>
);

Button.propTypes = ShapeGoodsItem.isRequired;
