import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goodsList,
  isReversed,
  sortBy,
  minLength,
}) => {
  const goods = goodsList.filter(good => good.length >= minLength);

  switch (sortBy) {
    case 'name':
      goods.sort();
      break;

    case 'length':
      goods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    goods.reverse();
  }

  return (
    <ul>
      {goods.map(good => <li key={good}>{good}</li>)}
    </ul>
  );
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  minLength: PropTypes.number.isRequired,
};
