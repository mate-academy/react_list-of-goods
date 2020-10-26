import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ value, changeHandler, className, range }) => {
  const items = [];

  for (let i = 0; i < range; i += 1) {
    items.push(i + 1);
  }

  return (
    <select
      value={value}
      onChange={event => changeHandler(event)}
      className={className}
    >
      {items.map(item => (
        <option key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  range: PropTypes.number.isRequired,
};
