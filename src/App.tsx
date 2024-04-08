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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const initialOptions: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  const [reorderOptions, setReorderOptions] =
    useState<ReorderOptions>(initialOptions);

  const handleSortAlphabetically = () => {
    setReorderOptions(prevOptions => ({
      ...prevOptions,
      sortType: SortType.ALPHABET,
    }));
  };

  const handleSortByLength = () => {
    setReorderOptions(prevOptions => ({
      ...prevOptions,
      sortType: SortType.LENGTH,
    }));
  };

  const handleReverse = () => {
    setReorderOptions(prevOptions => ({
      ...prevOptions,
      isReversed: !prevOptions.isReversed,
    }));
  };

  const handleReset = () => {
    setReorderOptions(initialOptions);
  };

  const visibleGoods = getReorderedGoods(goodsFromServer, reorderOptions);

  const isGoodsInOriginalOrder =
    JSON.stringify(reorderOptions) === JSON.stringify(initialOptions);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${reorderOptions.sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${reorderOptions.sortType === SortType.LENGTH ? '' : 'is-light'}`}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reorderOptions.isReversed ? '' : 'is-light'}`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {isGoodsInOriginalOrder ? null : (
          <button
            type="button"
            className="button is-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map((good, index) => (
          <li key={index} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
