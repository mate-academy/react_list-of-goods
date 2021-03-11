import React from 'react';
import PropTypes from 'prop-types';

const options = new Array(10).fill(1).map((el, i) => i + 1);

export const Select = ({ handler }) => (
  <select
    className="button"
    onChange={event => handler(event)}
  >
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}

  </select>
);

Select.propTypes = {
  handler: PropTypes.func.isRequired,
};
