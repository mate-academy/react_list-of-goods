import React from 'react';
import PropTypes from 'prop-types';

export function Select({ selectLength, selected }) {
  const lengthSelector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select
      onChange={selectLength}
      value={selected}
    >
      {
        lengthSelector.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  selectLength: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};
