import React from 'react';
import PropTypes, { string } from 'prop-types';
import './GoodsList.css';

export const GoodsList = ({ goods, sortBy, isReversed }) => {
  const newGoods = [...goods].sort((good1, good2) => {
    switch (sortBy) {
      case 'alphabet':
        return good1.localeCompare(good2);
      case 'length':
        return good1.length - good2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    newGoods.reverse();
  }

  return (
    <ul className="list">
      {newGoods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
  sortBy: PropTypes.string.isRequired,
  isReversed: PropTypes.bool.isRequired,
};

export default React.memo(GoodsList);
