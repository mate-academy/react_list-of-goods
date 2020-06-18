import React from 'react';
import PropTypes from 'prop-types';

const selectValues = [];

// eslint-disable-next-line no-plusplus
for (let i = 1; i < 11; i++) {
  selectValues.push(i);
}

const GoodsListSelect = props => (
  <select
    className="custom-select"
    onClick={event => props.setMinLength(event.target.value)}
  >
    {
      selectValues.map(value => (
        <option
          key={value}
          selected={props.minLength === value}
        >
          {value}
        </option>
      ))
    }
  </select>
);

export { GoodsListSelect };

GoodsListSelect.propTypes = {
  setMinLength: PropTypes.func.isRequired,
  minLength: PropTypes.number.isRequired,
};
