import React from 'react';
import PropTypes from 'prop-types';

const arrOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SelectedLength = ({ selectedLength, minLength }) => (

  <select onChange={selectedLength} value={minLength}>
    {arrOptions.map(n => (
      <option
        key={n}
        value={n}
      >
        {n}
      </option>
    ))}
  </select>
);

SelectedLength.propTypes = {
  selectedLength: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
