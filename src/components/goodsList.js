import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './select';
import '../App.css';

export function GoodsList({
  list,
  reverse,
  sort,
  sortLength,
  reset,
  selectLength,
  selected,
}) {
  return (
    <ul>
      {list.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
      <br />
      <button
        type="button"
        className="buttons"
        onClick={reverse}
      >
        REVERSE
      </button>
      <button
        type="button"
        className="buttons"
        onClick={sort}
      >
        SORT
      </button>
      <button
        type="button"
        className="buttons"
        onClick={sortLength}
      >
        SORT(length)
      </button>
      <button
        type="button"
        className="buttons"
        onClick={reset}
      >
        RESET
      </button>
      <Select
        selectLength={selectLength}
        selected={selected}
      />
    </ul>
  );
}

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  sortLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  selectLength: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};
