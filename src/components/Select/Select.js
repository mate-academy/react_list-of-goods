import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

export const Select = ({ onChange, numbers, length }) => {
  const values = Array.from({ length: [numbers] }, (item, index) => index);

  return (
    <select onChange={onChange} value={length} className="select">
      {values.map(
        (item,
          index) => <option value={index + 1} key={item}>{index + 1}</option>,
      )}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  numbers: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
