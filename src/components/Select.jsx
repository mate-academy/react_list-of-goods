import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  value,
  onChange,
  maxNameLength,
}) => {
  const optionCount = Array.from({length: maxNameLength}, (_, i) => i + 1)

  return (
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
};

Select.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  maxNameLength: PropTypes.number.isRequired,
};
