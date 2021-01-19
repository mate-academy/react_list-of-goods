import React from 'react';
import { SelectProps } from '../../props/SelectProps';
import './Select.css';

export const Select = React.memo(({ minLength, changeMinLength }) => (
  <select
    name="length"
    className="select custom-select"
    size="1"
    value={minLength}
    onChange={changeMinLength}
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
));

Select.propTypes = SelectProps;
