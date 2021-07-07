import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ handleClick, value, options }) => (
  <select value={value} onChange={handleClick}>
    {options.map(option => (
      <option value={option} key={option}>{option}</option>
    ))}
  </select>
);

Select.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};
