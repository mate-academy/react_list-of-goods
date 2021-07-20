import React from 'react';
import PropTypes from 'prop-types';

const options = [...Array(10).keys()];

export const Select = ({ value, handler }) => (
  <select value={value} onChange={handler}>
    {options.map(number => (
      <option value={number + 1} key={number}>{number + 1}</option>
    ))}
  </select>
);

Select.propTypes = {
  value: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
