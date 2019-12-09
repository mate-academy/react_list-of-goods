import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ handleClick }) => (
  <select
    className="button"
    onChange={handleClick}
  >
    {[...Array(10).keys()].map(num => (
      <option key={num}>{num + 1}</option>
    ))}
  </select>
);

Select.propTypes = { handleClick: PropTypes.func.isRequired };

export default Select;
