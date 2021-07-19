import React from 'react';
import PropTypes from 'prop-types';
import { FuncType } from '../../types';

export const ListManipulator = ({
  reverse,
  sortByName,
  sortByLength,
  reset,
  filterByLength,
  lengthOptions,
  lengthFilterBy,
}) => (
  <>
    <button
      type="button"
      onClick={() => {
        reverse();
      }}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={() => {
        sortByName();
      }}
    >
      Sort by name
    </button>
    <button
      type="button"
      onClick={() => {
        sortByLength();
      }}
    >
      Sort by length
    </button>
    <button
      type="button"
      onClick={() => {
        reset();
      }}
    >
      Reset
    </button>
    <select
      id="lengthSelector"
      value={lengthFilterBy}
      onChange={({ target }) => {
        filterByLength(+target.value);
      }}
    >
      {lengthOptions.map(item => (
        <option value={`${item}`} key={item}>{item}</option>
      ))}
    </select>
  </>
);

ListManipulator.propTypes = {
  reverse: FuncType.isRequired,
  sortByName: FuncType.isRequired,
  sortByLength: FuncType.isRequired,
  reset: FuncType.isRequired,
  filterByLength: FuncType.isRequired,
  lengthFilterBy: PropTypes.number.isRequired,
  lengthOptions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
