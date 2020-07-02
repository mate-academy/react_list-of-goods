import React from 'react';
import PropType from 'prop-types';
import './SortSelect.css';

export const SortSelect = ({ selectValue, onChangeHandle }) => {
  const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <span className="goods__sort-select">
      Min length:&nbsp;
      <select
        value={selectValue}
        onChange={onChangeHandle}
      >
        {selectOptions.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </span>
  );
};

SortSelect.propTypes = {
  selectValue: PropType.number.isRequired,
  onChangeHandle: PropType.func.isRequired,
};
