import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ filter }) => (
  <select
    className="select"
    name="number"
    size="8"
    onChange={filter}
  >
    <option disabled>choose goods length</option>
    {[...Array(10)].map((el, i) => (
      <option key={el} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>
);

Select.propTypes = { filter: PropTypes.func.isRequired };

export default Select;
