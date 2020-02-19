import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ stringLength, selectBtn, quantity }) => (
  <select
    onChange={selectBtn}
    value={stringLength}
  >
    {
      new Array(10).fill(1).map((element, index) => (
        <option key={element} value={index + 1}>{index + 1}</option>
      ))
    }
  </select>
);

Select.propTypes = {
  stringLength: PropTypes.string.isRequired,
  selectBtn: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
