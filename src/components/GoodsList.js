import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = React.memo(({
  goods,
  defValue,
  booleanValue,
  start,
  limit,
  sortByChar,
  sortByLength,
  reverse,
  reset,
}) => (
  <>
    <div className="goods" hidden={!booleanValue}>
      <ul>
        {goods.map(good => <li id={good} key={good}>{good}</li>)}
      </ul>
    </div>

    <div className="nav">
      <select
        value={defValue}
        onChange={limit}
        hidden={!booleanValue}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>

      <button
        type="button"
        hidden={booleanValue}
        onClick={start}
      >
        Start
      </button>
      <button
        type="button"
        onClick={reverse}
        disabled={!booleanValue}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={sortByChar}
        disabled={!booleanValue}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        onClick={sortByLength}
        disabled={!booleanValue}
      >
        Sort by length
      </button>
      <button
        type="button"
        onClick={reset}
        disabled={!booleanValue}
      >
        Reset
      </button>
    </div>
  </>
));

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  defValue: PropTypes.number.isRequired,
  booleanValue: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  limit: PropTypes.func.isRequired,
  sortByChar: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
