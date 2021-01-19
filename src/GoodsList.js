import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const GoodsList = ({ goods, reverse, sortByAlphabet, sortByLength, reset }) => (
  <>
    <ul className="goods-list">
      {goods.map(item => (
        <li key={item} className="goods-item">{item}</li>
      ))}
    </ul>
    <div className="btn-bar">
      <button
        type="button"
        className="btn"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="btn"
        onClick={sortByAlphabet}
      >
        Sort A-Z
      </button>
      <button
        type="button"
        className="btn"
        onClick={sortByLength}
      >
        Sort by length
      </button>
      <button
        type="button"
        className="btn"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default GoodsList;
