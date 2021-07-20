import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  value,
  onChange,
  optionCount,
}) => (
  <select
    value={value}
    onChange={onChange}
  >
    {optionCount.map(number => (
      <option
        value={`${number}`}
        key={number}
      >
        {number}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  optionCount: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
};
