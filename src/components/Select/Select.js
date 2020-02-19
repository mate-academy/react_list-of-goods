import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ quantity, quantityFunc }) => (
  <select
    value={quantity}
    className="select"
    onChange={quantityFunc}
  >
    {
      new Array(10).fill('initValue').map((item, index) => (
        <option
          key={item}
          value={index + 1}
          className="select__item"
        >
          {index + 1}
        </option>
      ))
    }
  </select>
);

Select.propTypes = {
  quantity: PropTypes.string.isRequired,
  quantityFunc: PropTypes.func.isRequired,
};
