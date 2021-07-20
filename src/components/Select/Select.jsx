import React from 'react';
import PropTypes, { number } from 'prop-types';

export const Select = ({ action, value, range }) => (
  <>
    <select
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      onChange={action}
      value={value}
    >
      {range.map(element => (
        <option key={Math.random()} value={element}>{element}</option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  range: PropTypes.arrayOf(number).isRequired,
};
