import React from 'react';
import listPropTypes from './listPropTypes';

const ImplementedList = ({
  list,
  isReversed,
  isSortedAlphabetically,
  isSortedByLength,
  SelectedLength,
}) => {
  let copyList = [...list];

  if (isReversed) {
    copyList.reverse();
  }

  if (isSortedAlphabetically) {
    copyList.sort((a, b) => a.localeCompare(b));
  }

  if (isSortedByLength) {
    copyList.sort((a, b) => b.length - a.length);
  }

  if (Number(SelectedLength) > 0) {
    copyList = copyList.filter(item => item.length >= SelectedLength);
  }

  return (
    <>
      <h1>Goods</h1>
      <ul className="App__list">
        {copyList.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    </>
  );
};

ImplementedList.propTypes = listPropTypes;

export default ImplementedList;
