import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, action, listLength }) => {
  const list = [];

  for (let i = 0; i < listLength; i += 1) {
    list.push(i + 1);
  }

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
  listLength: PropTypes.number.isRequired,
};

export default Select;
