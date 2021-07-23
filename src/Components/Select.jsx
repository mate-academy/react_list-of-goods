import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ dataAmountGoods, onChange }) => (
  <select
    onChange={onChange}
  >
    {dataAmountGoods.map(number => (
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
  dataAmountGoods: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
