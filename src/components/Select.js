import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Select = React.memo(({
  value,
  changeHandler,
  className,
  range,
}) => {
  const items = [...Array(10).keys()];

  return (
    <select
      value={value}
      onChange={event => changeHandler(event)}
      className={className}
    >
      {items.map(item => (
        <option key={uuidv4()}>
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
