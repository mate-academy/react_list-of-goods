import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export const App: React.FC = () => {
  const deafultOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  const [reorderOptions, setReorderOptions] =
    useState<ReorderOptions>(deafultOptions);

  const createSortTypeHandler = (sortType: SortType) => () =>
    setReorderOptions({ ...reorderOptions, sortType: sortType });

  const toggleReversedHandler = () =>
    setReorderOptions({
      ...reorderOptions,
      isReversed: !reorderOptions.isReversed,
    });

  const resetHandler = () => setReorderOptions(deafultOptions);

  const { sortType, isReversed } = reorderOptions;
  const isResetVisible = sortType !== SortType.NONE || isReversed;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={createSortTypeHandler(SortType.ALPHABET)}
          type="button"
          className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
        >
          Sort alphabetically
        </button>

        <button
          onClick={createSortTypeHandler(SortType.LENGTH)}
          type="button"
          className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
        >
          Sort by length
        </button>

        <button
          onClick={toggleReversedHandler}
          type="button"
          className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
        >
          Reverse
        </button>

        {isResetVisible && (
          <button
            onClick={resetHandler}
            type="button"
            className="button is-danger"
          >
            Reset
          </button>
        )}
      </div>

      <GoodList goods={getReorderedGoods(goodsFromServer, reorderOptions)} />
    </div>
  );
};
