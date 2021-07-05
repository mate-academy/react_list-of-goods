import React from 'react';
import PropTypes from 'prop-types';

const choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LengthSelect = ({ lengthSelect, minLength }) => (

  <select
    className="options"
    onChange={lengthSelect}
    value={minLength}
  >
    {choices.map(n => (
      <option
        key={n}
        value={n}
      >
        {n}
      </option>
    ))}
  </select>
);

LengthSelect.propTypes = {
  lengthSelect: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
