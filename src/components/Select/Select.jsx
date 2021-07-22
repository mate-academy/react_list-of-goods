import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ callback, list }) => (
  <select
    onClick={callback}
  >
    {list.map((item, index) => (
      <option
        value={list}
        key={item}
      >
        {index + 1}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  callback: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
