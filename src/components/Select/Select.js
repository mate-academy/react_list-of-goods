import React from 'react';
import { SelectShape } from '../Shape';

export const Select = ({ goods, change, value }) => (
  <select
    onChange={change}
    value={value}
  >
    {goods.map((item, index) => (
      <option value={index + 1}>{index + 1}</option>
    ))}
  </select>
);

Select.propTypes = SelectShape.isRequired;
