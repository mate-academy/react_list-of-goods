import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const Select = ({ quantity, quantityFunc }) => (
  <select
    value={quantity}
    className="select"
    onChange={quantityFunc}
  >
    {
      new Array(10).fill('initValue').map((element, index) => (
        <option
          key={uuid()}
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
