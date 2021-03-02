import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({
  goods,
  bool,
  options,
  disabled,
  start,
  limit,
  sortByChar,
  sortByLength,
  reverse,
  reset,
}) => (
  <>
    <div className="goods" hidden={!bool}>
      <ul>
        {goods.map(good => <li key={good}>{good}</li>)}
      </ul>
    </div>

    <div className="nav">
      <button
        type="button"
        hidden={bool}
        onClick={start}
      >
        Start
      </button>
      <button
        type="button"
        onClick={reverse}
        disabled={!bool}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={sortByChar}
        disabled={!bool}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        onClick={reset}
        disabled={!bool}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={sortByLength}
        disabled={!bool}
      >
        Sort by length
      </button>

      <select
        defaultValue={1}
        onChange={limit}
        disabled={disabled}
        hidden={!bool}
      >
        {options.map(option => <option key={`id${option}`}>{option}</option>)}
      </select>
    </div>
  </>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  bool: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  disabled: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  limit: PropTypes.func.isRequired,
  sortByChar: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
