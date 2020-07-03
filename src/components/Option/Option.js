import React from 'react';
import PropTypes from 'prop-types';

export const Options = (props) => {
  const { reverse,
    sortByAlphabet,
    reset,
    sortByLength,
    select,
    value,
    filterByLength } = props;

  return (
    <div>
      <button type="button" onClick={reverse}>Reverse</button>
      <button type="button" onClick={sortByAlphabet}>Sort By Names</button>
      <button type="button" onClick={reset}>Reset</button>
      <button type="button" onClick={sortByLength}>Sort By Length</button>
      <select onChange={filterByLength} value={value}>
        {
          select.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
    </div>
  );
};

Options.propTypes = {
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  filterByLength: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  select: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.number.isRequired,
};
