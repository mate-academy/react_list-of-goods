/* eslint-disable no-plusplus */
import React from 'react';
import { ShapeGoodsItem } from './Shapes';

export const Option = props => (
  <option>
    {props.digit}
  </option>
);

Option.propTypes = ShapeGoodsItem.isRequired;
