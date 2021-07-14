import React from 'react';

export const GoodsList = ({goodsList, isReverse, sortBy}) => {
  const copyList = [...goodsList];

  if (sortBy) {
    copyList.sort((prevGood, nextGood) => {
      switch (sortBy) {
        case 'alphabetically':
          return (
            prevGood.localeCompare(nextGood)
          );
        case 'length':
          return (
            prevGood.length - nextGood.length
          );
        default: break;
      }
    });
  }

  if (isReverse) {
    copyList.reverse();
  }

  return (
    <ul>
      {copyList.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
