import React from 'react';
import { SelectTypes } from '../Shape/Shape';

export const Select = (props) => {
  const {
    value,
    action,
  } = props;
  const maxLength = 10;
  const numbers = [];

  for (let i = 1; i <= maxLength; i += 1) {
    numbers.push(i);
  }

  return (
    <select
      className="form-control"
      id="exampleSelect1"
      name="select"
      value={value}
      onChange={action}
    >
      {numbers.map(number => (
        <option key={number}>{number}</option>
      ))}
    </select>
  );
};

Select.propTypes = SelectTypes;
