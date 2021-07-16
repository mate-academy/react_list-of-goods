import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good/Good';
import { goodType } from '../../types';

export const GoodsList = ({ goods, isReversed, sortBy, nameIsLongerThan }) => {
  const visibleGoods = [...goods].filter(good => (
    good.length >= nameIsLongerThan
  ));

  visibleGoods.sort((left, right) => {
    switch (sortBy) {
      case 'length': {
        return left.length - right.length;
      }

      case 'name': {
        return left.localeCompare(right);
      }

      default: {
        return 0;
      }
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <ul>
      {visibleGoods.map(good => (
        <li key={good}>
          <Good good={good} />
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(goodType).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  nameIsLongerThan: PropTypes.number.isRequired,
};
