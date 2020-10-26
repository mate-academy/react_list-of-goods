import React from 'react';
import PropTypes from 'prop-types';

export const LengthSelect = React.memo(({ range, onChange, value }) => (
  <select
    onChange={onChange}
    value={value}
  >
    {range.map(number => (
      <option
        value={number}
        key={number}
      >
        {number}
      </option>
    ))}
  </select>
));

LengthSelect.propTypes = {
  range: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
