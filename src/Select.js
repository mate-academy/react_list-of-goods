import React from 'react';
import PropTypes from 'prop-types';

function Select({ changeSelect, selectValue }) {
  return (
    <select onChange={changeSelect} value={selectValue}>
      {[...Array(10)].map((item, i) => (
        <option>{i + 1}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  changeSelect: PropTypes.func.isRequired,
  selectValue:
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Select;
