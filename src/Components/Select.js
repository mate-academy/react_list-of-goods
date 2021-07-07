import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const options = new Array(10).fill(0).map((item, i) => i + 1);

const Select = ({ selectedLength, action }) => (
  <select
    onChange={e => action(e.target.value)}
    value={selectedLength}
  >
    {options.map(item => (
      <option
        value={item}
        key={item}
      >
        {item}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  selectedLength: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Select;
