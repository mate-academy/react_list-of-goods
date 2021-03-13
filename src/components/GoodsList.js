import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({
    defaultLength,
    selectedLength,
    goodsLength,
    goodsList,
    reverseGoods,
    sortAlphabetically,
    reset,
    sortByLength,
  }) => (
    <>
      <div>
        <ul>
          {goodsList.map(good => (
            <li
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={reverseGoods}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={sortByLength}
        >
          Sort by length
        </button>
        <label
          className="selectGoods"
        >
          Select Goods Length:
          <select
            value={defaultLength}
            onChange={selectedLength}
          >
            {goodsLength.map(goodLength => (
              <option key={goodLength} value={goodLength}>
                {goodLength}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  ),
);

GoodsList.propTypes = {
  defaultLength: PropTypes.number.isRequired,
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  selectedLength: PropTypes.func.isRequired,
  reverseGoods: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  goodsLength: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ),
};

GoodsList.defaultProps = {
  goodsList: [],
  goodsLength: [],
};
