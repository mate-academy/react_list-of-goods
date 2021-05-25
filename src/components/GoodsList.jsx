import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({ goodsList, sorting }) => {
    let changedGoodsList = [...goodsList].filter(element => (
      element.length >= sorting.filterByLength
    ));

    if (sorting.sortByAlphabet) {
      changedGoodsList = changedGoodsList.sort((prevGood, good) => (
        prevGood.localeCompare(good)
      ));
    }

    if (sorting.sortByLength) {
      changedGoodsList = changedGoodsList.sort((prevGood, good) => (
        prevGood.length - good.length
      ));
    }

    if (sorting.reverse) {
      changedGoodsList.reverse();
    }

    return (
      <ul>
        {changedGoodsList.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    );
  },
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sorting: PropTypes.shape({
    reverse: PropTypes.bool.isRequired,
    sortByAlphabet: PropTypes.bool.isRequired,
    sortByLength: PropTypes.bool.isRequired,
    filterByLength: PropTypes.number.isRequired,
  }).isRequired,
};
