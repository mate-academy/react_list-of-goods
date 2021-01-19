import React from 'react';
import PropTypes from 'prop-types';

export const ControllButtons = ({
  reverseGoods,
  sortGoodsAlphabetically,
  reset,
  sortGoodsByLength,
}) => (
  <>
    <button type="button" onClick={reverseGoods}>
      Reverse
    </button>

    <button type="button" onClick={sortGoodsAlphabetically}>
      Sort alphabetically
    </button>

    <button type="button" onClick={reset}>
      Reset
    </button>

    <button type="button" onClick={sortGoodsByLength}>
      Sort by length
    </button>
  </>
);

ControllButtons.propTypes = {
  reverseGoods: PropTypes.func.isRequired,
  sortGoodsAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortGoodsByLength: PropTypes.func.isRequired,
};
