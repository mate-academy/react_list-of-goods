/* eslint-disable no-console */
import React from 'react';
import { ShapeGoodsItem } from './Shapes';

export const GoodItem = props => (
  <li>{props.item}</li>
);

GoodItem.propTypes = ShapeGoodsItem.isRequired;
