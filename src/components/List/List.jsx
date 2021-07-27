import React from 'react';
import { listProp } from '../../types';

import './List.css';

export const List = ({ list, state }) => {
  const copiedList = [...list];

  switch (state.sortBy) {
    case 'name':
      copiedList.sort((g1, g2) => g1.localeCompare(g2));
      break;
    case 'length':
      copiedList.sort((g1, g2) => g1.length - g2.length);
      break;
    default:
      break;
  }

  if (state.isReversed) {
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
