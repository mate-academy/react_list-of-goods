import React from 'react';
import PropTypes from 'prop-types';

export const LengthFilter = ({ onChange, minLength }) => {
  const lengthValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select onChange={onChange} value={minLength} className="LengthFilter">
      {lengthValues.map(
        n => <option value={n} key={n}>{n}</option>,
      )}
    </select>
  );
};

LengthFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
