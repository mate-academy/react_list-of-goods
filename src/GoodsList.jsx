import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({
  goods,
  reversed,
  sortedBy,
}) => {
  let processedList;

  switch (sortedBy) {
    case 'name':
      processedList = [...goods].sort((a, b) => (a.localeCompare(b)));
      break;

    case 'length':
      processedList = [...goods].sort((a, b) => a.length - b.length);
      break;

    default:
      processedList = [...goods];
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
};
