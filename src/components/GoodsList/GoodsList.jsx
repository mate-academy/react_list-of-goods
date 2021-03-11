import PropTypes from 'prop-types';

import React from 'react';
import { Goods } from '../Goods';

export function GoodsList({
  isReverse,
  sortBy,
  initialGoods,
}) {
  const newGoodsList = [...initialGoods];

  newGoodsList.sort((
    currentGoods, nextGoods,
  ) => {
    switch (sortBy) {
      case 'length':
        return currentGoods.length - nextGoods.length;

      case 'alphabetically':
        return currentGoods.localeCompare(nextGoods);

      default:
        return 0;
    }
  });

  if (isReverse) {
    newGoodsList.reverse();
  }

  return (
    <ul>
      {newGoodsList.map(goods => (
        <Goods key={goods} goods={goods} />
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired),
}.isRequired;
