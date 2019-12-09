import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ handleClick, currentValue }) => (
  <select
    className="button"
    onChange={handleClick}
    value={currentValue}
  >
    {[...Array(10).keys()].map(num => (
      <option key={num}>{num + 1}</option>
    ))}
  </select>
);

Select.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default Select;
