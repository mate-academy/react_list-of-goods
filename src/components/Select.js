import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Select = React.memo(({
  value,
  changeHandler,
  className,
  range,
}) => {
  const items = [...Array(range).keys()];
  const keys = [];

  for (let i = 0; i < range; i += 1) {
    keys.push(uuidv4());
  }

  return (
    <select
      value={value}
      onChange={changeHandler}
      className={className}
    >
      {items.map((item, index) => (
        <option key={keys[index]}>
          {item + 1}
        </option>
      ))}
    </select>
  );
});

Select.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  range: PropTypes.number.isRequired,
};
