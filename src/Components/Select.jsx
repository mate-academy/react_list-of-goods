import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ optionsAmountGoods, minProductLength, onChange }) => (
  <select
    onChange={onChange}
    value={minProductLength}
  >
    {optionsAmountGoods.map(number => (
      <option
        value={number}
        key={number}
      >
        {number}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  optionsAmountGoods: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
