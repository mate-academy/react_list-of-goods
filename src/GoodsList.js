import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goodsList,
  isReversed,
  sortedByName,
  sortedByLength,
  minLength,
}) => {
  const goods = [...goodsList]
    .filter(good => good.length >= minLength);

  if (sortedByLength) {
    goods.sort((a, b) => a.length - b.length);
  }

  if (sortedByName) {
    goods.sort();
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
  sortedByName: PropTypes.bool.isRequired,
  sortedByLength: PropTypes.bool.isRequired,
  minLength: PropTypes.number.isRequired,
};
