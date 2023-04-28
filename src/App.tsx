import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
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
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

type State = {
  isReversed: boolean,
  sortType: SortType,
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType) {
    visibleGoods.sort((goodA, goodB) => (sortType === SortType.ALPHABET
      ? goodA.localeCompare(goodB)
      : goodB.length - goodA.length));
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [sortState, setSortState] = useState<State>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const onSortClick = (newSortType: keyof typeof SortType) => setSortState(
    prev => ({ ...prev, sortType: SortType[newSortType] }),
  );

  const onReversClick = () => setSortState(prev => (
    { ...prev, isReversed: !prev.isReversed }));

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => onSortClick('ALPHABET')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={() => onSortClick('LENGTH')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={onReversClick}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={
            () => setSortState({ sortType: SortType.NONE, isReversed: false })
          }
        >
          Reset
        </button>
      </div>

      <ul>
        <ul>
          {getReorderedGoods(goodsFromServer, sortState).map(good => (
            <li key={good} data-cy="Good">{good}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
