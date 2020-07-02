import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, action }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select onChange={action} value={value}>
      {
        list.map((element, index) => (
          <option key={element} value={index + 1}>
            {index + 1}
          </option>
        ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export default Select;
