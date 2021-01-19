import React from 'react';
import { ControlersGoodsProps } from '../../props/ControlersGoodsProps';

export const ControlersGoods = React.memo(({
  reverse,
  sortByAlph,
  sortByLength,
  reset,
}) => (
  <>
    <button
      className="btn btn-warning mr-2"
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>

    <button
      className="btn btn-warning mr-2"
      type="button"
      onClick={sortByAlph}
    >
      Sort alphabetically
    </button>

    <button
      className="btn btn-warning mr-2"
      type="button"
      onClick={sortByLength}
    >
      Sort by length
    </button>

    <button
      className="btn btn-warning mr-2"
      type="button"
      onClick={reset}
    >
      Reset
    </button>
  </>
));

ControlersGoods.propTypes = ControlersGoodsProps;
