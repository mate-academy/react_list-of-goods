import React from 'react';
import PropTypes from 'prop-types';

const SelectGoods = ({ onChange }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select onChange={onChange} className="form-control">
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

SelectGoods.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectGoods;
