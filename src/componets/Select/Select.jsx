import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ item, numbers, number, select }) => (
  <>
    <label className={`select ${item}`} htmlFor="select">
      Select word length
    </label>
    <select
      name="number"
      value={`${number}`}
      onChange={select}
      className={`select ${item}`}
      id="select"
    >
      {numbers.map(num => (
        <option
          key={num}
          value={num}
        >
          {num}
        </option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  item: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  select: PropTypes.func.isRequired,
};
