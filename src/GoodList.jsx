import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ isStarted, goods,
  isReversed, isSorted, isSortedByLength }) {
  const visibleGoods = [...goods];

  if (isSortedByLength) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

  if (isSorted) {
    visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  if (isStarted) {
    return (
      <ul>
        {visibleGoods.map(good => (
          <li id="good">{good}</li>
        ))}
      </ul>
    );
  }

  return null;
}

GoodsList.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  isReversed: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  isSortedByLength: PropTypes.bool.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
