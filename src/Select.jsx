import React from 'react';
import PropTypes from 'prop-types';

const options = Array.from({ length: 10 }, (_, i) => i + 1);

export const Select = ({ onChange }) => (
  <select
    className="button"
    onChange={event => onChange(event)}
  >
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}

  </select>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};
