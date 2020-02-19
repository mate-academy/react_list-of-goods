import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ selectedIndex, handleChange }) => (
  <select
    className="select"
    value={selectedIndex}
    onChange={handleChange}
  >
    {[...Array(10).keys()].map(number => (
      <option key={number}>{number + 1}</option>
    ))}
  </select>
);

Select.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
