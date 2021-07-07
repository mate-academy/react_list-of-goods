import React from 'react';
import { ShapeSelect } from '../Shapes/ShapeSelect';

export const Select = props => (
  <select
    value={props.defaultSelect}
    onChange={event => props.onSelected(event.target.value)}
  >
    {[...new Array(props.quantity)].map((option, index) => (
      <option
        key={index.toString()}
        value={index + 1}
      >
        {index + 1}
      </option>
    ))}
  </select>
);

Select.propTypes = ShapeSelect.isRequired;
