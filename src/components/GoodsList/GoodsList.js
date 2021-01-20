import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goodsList,
  reverse,
  sortAlphabet,
  reset,
  sortByLength,
}) => (

  <div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="btn btn-info"
      onClick={sortAlphabet}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="btn btn-dark"
      onClick={reset}
    >
      Reset
    </button>
    <button
      type="button"
      className="btn btn-warning"
      onClick={sortByLength}
    >
      Sort by length
    </button>

    <ul className="list-group">
      {goodsList.map(product => (
        <li className="list-group-item" key={product}>{product}</li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabet: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
