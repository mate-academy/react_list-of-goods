import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ selectedValue, handleSelect }) => (
  <select
    value={selectedValue}
    onChange={handleSelect}
  >
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
        <option
          key={value}
          value={value}
        >
          {value}
        </option>
      ))
    }
  </select>
);

Select.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Select;
