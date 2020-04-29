import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ stringLength, selectButton }) => (
  <select onChange={selectButton} value={stringLength}>
    {
      new Array(10).fill('').map((element, index) => (
        <option value={index + 1}>{index + 1}</option>
      ))
    }
  </select>
);

Select.propTypes = {
  stringLength: PropTypes.number.isRequired,
  selectButton: PropTypes.func.isRequired,
};

export default Select;
