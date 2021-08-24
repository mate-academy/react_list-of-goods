import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsFromServer,
  isReversed,
  sortAlphabetically,
  sortByLength,
  isResetted }) => {
  let goodsToDisplay = [...goodsFromServer];

  if (sortAlphabetically) {
    goodsToDisplay.sort();
  }

  if (sortByLength) {
    goodsToDisplay.sort((goodA, goodB) => goodB.length - goodA.length);
  }

  if (isReversed) {
    goodsToDisplay.reverse();
  }

  if (isResetted) {
    goodsToDisplay = [...goodsFromServer];
  }

  return (
    <ul>
      {goodsToDisplay.map(good => (
        <li key={good}>
          {good}
        </li>
      ))
      }
    </ul>
  );
};

GoodsList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortAlphabetically: PropTypes.bool.isRequired,
  sortByLength: PropTypes.bool.isRequired,
  isResetted: PropTypes.bool.isRequired,
};
