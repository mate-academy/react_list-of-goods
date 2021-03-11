import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({
    selectedLength,
    goodsLength,
    goodsList,
    hiddenButtons,
    hiddenStart,
    renderGoods,
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
              hidden={hiddenButtons}
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
          onClick={renderGoods}
          hidden={hiddenStart}
        >
          Start
        </button>
        <button
          type="button"
          className="button"
          onClick={reverseGoods}
          hidden={hiddenButtons}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={sortAlphabetically}
          hidden={hiddenButtons}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={reset}
          hidden={hiddenButtons}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={sortByLength}
          hidden={hiddenButtons}
        >
          Sort by length
        </button>
        <label
          hidden={hiddenButtons}
          className="selectGoods"
        >
          Select Goods Length:
          <select
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
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  selectedLength: PropTypes.func.isRequired,
  hiddenButtons: PropTypes.bool.isRequired,
  hiddenStart: PropTypes.bool.isRequired,
  renderGoods: PropTypes.func.isRequired,
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
