import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({
  goodsList,
  isReverse,
  sortBy,
}) => {
  const newGoods = [...goodsList];

  if (sortBy !== 'default') {
    newGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });
  }

  if (isReverse) {
    newGoods.reverse();
  }

  return (
    <ul className="goods-list">
      {newGoods.map(good => (
        <li key={good} className="goods-list__item">
          {good}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isReverse: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
};
