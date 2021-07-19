import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  value,
  onChange,
  maxNameLength,
}) => {
  const optionCount = [];

  for (let length = 1; length <= 10; length++) {
    optionCount.push(length);
  }

  return (
    <select
      value={value}
      onChange={onChange}
    >
      {optionCount.map(number => (
        <option value={`${number}`}>{number}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  maxNameLength: PropTypes.number.isRequired,
};
