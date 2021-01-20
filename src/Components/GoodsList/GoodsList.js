import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, sortedBy, isReversed }) => {
  goods.sort((first, second) => {
    switch (sortedBy) {
      case 'name':
        return first.localeCompare(second);
      case 'length':
        return first.length - second.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    goods.reverse();
  }

  return (
    <ul>
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortedBy: PropTypes.string.isRequired,
  isReversed: PropTypes.bool.isRequired,
};
