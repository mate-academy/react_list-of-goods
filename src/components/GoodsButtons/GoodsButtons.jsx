import React from 'react';
import PropTypes from 'prop-types';

import './goodsButtons.css';

export const GoodsButtons = ({
  reverse,
  sortByAlphabetically,
  sortByLength,
  reset,
}) => (
  <div className="goods-buttons">
    <button
      type="button"
      className="goods-buttons__button button is-link"
      onClick={reverse}
    >
      reverse
    </button>
    <button
      type="button"
      className="goods-buttons__button button is-link"
      onClick={sortByAlphabetically}
    >
      alphabetically
    </button>
    <button
      type="button"
      className="goods-buttons__button button is-link"
      onClick={sortByLength}
    >
      length
    </button>
    <button
      type="button"
      className="goods-buttons__button button is-link"
      onClick={reset}
    >
      reset
    </button>
  </div>
);

GoodsButtons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByAlphabetically: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
