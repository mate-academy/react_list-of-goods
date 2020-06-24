/* eslint-disable no-plusplus */
import React from 'react';
import { ShapeOption } from './Shapes';

export const Option = props => (
  <option>
    {props.digit}
  </option>
);

Option.propTypes = ShapeOption.isRequired;
