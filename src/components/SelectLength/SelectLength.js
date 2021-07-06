import React from 'react';
import PropType from 'prop-types';
import './SelectLength.css';

export const SelectLength = ({ selectValue, handle }) => {
  const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <span className="goods__sort-select">
      Min length:&nbsp;
      <select
        value={selectValue}
        onChange={handle}
      >
        {selectOptions.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </span>
  );
};

SelectLength.propTypes = {
  selectValue: PropType.number.isRequired,
  handle: PropType.func.isRequired,
};
