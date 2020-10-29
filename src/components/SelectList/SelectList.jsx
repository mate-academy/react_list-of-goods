import React from 'react';
import PropTypes from 'prop-types';

export const SelectList = ({ selectValue, select }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <select
        className="App__select select"
        value={selectValue}
        onChange={(event) => {
          select(+event.target.value);
        }}
      >
        {numbers.map(number => (
          <option
            key={number}
            value={number}
          >
            {number}
          </option>
        ))}
      </select>
    </>
  )
}

SelectList.propTypes = {
  selectValue: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired,
}
