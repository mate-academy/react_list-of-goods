import React from 'react';
import PropTypes from 'prop-types';

const options = [...Array(10).keys()];

export const Select = ({ value, onChange }) => (
  <select value={value} onChange={event => onChange(+event.target.value)}>
    {options.map(number => (
      <option value={number + 1} key={number}>{number + 1}</option>
    ))}
  </select>
);

Select.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
