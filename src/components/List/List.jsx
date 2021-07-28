import React from 'react';
import { listProp } from '../../types';

import './List.css';

export const List = ({ list, state }) => {
  const copiedList = [...list];
  const { sortBy, isReversed } = state;

  switch (sortBy) {
    case 'name':
      copiedList.sort(
        (firstGood, secondGood) => firstGood.localeCompare(secondGood),
      );
      break;
    case 'length':
      copiedList.sort(
        (firstGood, secondGood) => firstGood.length - secondGood.length,
      );
      break;
    default:
      break;
  }

  if (isReversed) {
    copiedList.reverse();
  }

  return (
    <>
      <ul className="App__list">
        {copiedList.map(
          good => <li key={good} className="App__item">{good}</li>,
        )}
      </ul>
    </>
  );
};

List.propTypes = listProp;
