import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ value, action }) => {
  const list = Array.from({length: 10}, (_, x) => x++);

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
