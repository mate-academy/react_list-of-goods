/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // ...

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export const App = () => (
  <div className="App">
    <button type="button">
      Start
    </button>

    <button type="button">
      Sort alphabetically
    </button>

    <button type="button">
      Sort by length
    </button>

    <button type="button">
      Reverse
    </button>

    <button type="button">
      Reset
    </button>

    <ul className="Goods">
      <li className="Goods__item">Dumplings</li>
      <li className="Goods__item">Carrot</li>
      <li className="Goods__item">Eggs</li>
      <li className="Goods__item">...</li>
    </ul>
  </div>
);
