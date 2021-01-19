import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goods, reversed, sortedBy, minLength,
}) => {
  const processedList = [...goods].filter(item => item.length >= +minLength);

  switch (sortedBy) {
    case 'name':
      processedList.sort((a, b) => (a.localeCompare(b)));
      break;

    case 'length':
      processedList.sort((a, b) => a.length - b.length);
      break;

    default:
  }

  if (reversed) {
    processedList.reverse();
  }

  return (
    <ul>
      {processedList.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  reversed: PropTypes.bool.isRequired,
  sortedBy: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
};
