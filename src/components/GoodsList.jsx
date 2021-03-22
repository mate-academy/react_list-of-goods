import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList(props) {
  const {
    showList,
    goods,
    isReversed,
    sortBy,
  } = props;

  const goodsCopy = [...goods];

  goodsCopy.sort((word1, word2) => {
    switch (sortBy) {
      case 'id':
        return word1[sortBy] - word2[sortBy];
      case 'product':
        return word1[sortBy].localeCompare(word2[sortBy]);
      case 'length':
        return word1.product.length - word2.product.length;
      default:
        return null;
    }
  });

  if (isReversed) {
    goodsCopy.reverse();
  }

  return (
    <>
      {showList
      && (
        <ul>
          {goodsCopy.map(element => (
            <li key={element.id}>
              {element.product}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

GoodsList.propTypes = {
  showList: PropTypes.bool.isRequired,
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
};
