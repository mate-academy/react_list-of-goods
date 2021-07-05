import React from 'react';
import PropTypes from 'prop-types';

const selectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Select = ({ stringLength, selectButton }) => (
  <select onChange={selectButton} value={stringLength}>
    {
      selectItems.map((element, index) => (
        <option key={element} value={index + 1}>{index + 1}</option>
      ))
    }
  </select>
);

Select.propTypes = {
  stringLength: PropTypes.number.isRequired,
  selectButton: PropTypes.func.isRequired,
};

export default Select;
