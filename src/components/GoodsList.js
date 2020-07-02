import React from 'react';
import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';
import { Good } from './Good';

export const GoodsList
= ({ goods, onReverse, onSortAlphabetically,
  // eslint-disable-next-line arrow-body-style
  onReset, onSortByLength, onFilterLength, val }) => {
  return (
    <div className="container">
      <div className="buttons">
        <button
          type="button"
          className="button"
          onClick={onReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={onSortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={onSortByLength}
        >
          Sort by length
        </button>
        <select
          name="filterLength"
          value={val}
          onChange={event => onFilterLength(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <ul className="list">
        {goods.map(good => (
          <Good good={good} />
        ))}
      </ul>
    </div>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodShape).isRequired,
  onReverse: PropTypes.func.isRequired,
  onSortAlphabetically: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSortByLength: PropTypes.func.isRequired,
  onFilterLength: PropTypes.func.isRequired,
  val: PropTypes.number.isRequired,
};

export default GoodsList;
