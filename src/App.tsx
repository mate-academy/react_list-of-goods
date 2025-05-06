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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
): string[] {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [sortOptions, setSortOptions] = useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const reorderedGoods = getReorderedGoods(goodsFromServer, sortOptions);
  const isSorted =
    sortOptions.sortType !== SortType.NONE || sortOptions.isReversed;

  const handleSortAlphabet = () => {
    setSortOptions(prev => ({ ...prev, sortType: SortType.ALPHABET }));
  };

  const handleSortLength = () => {
    setSortOptions(prev => ({ ...prev, sortType: SortType.LENGTH }));
  };

  const handleReverse = () => {
    setSortOptions(prev => ({
      ...prev,
      isReversed: !prev.isReversed,
    }));
  };

  const handleReset = () => {
    setSortOptions({ sortType: SortType.NONE, isReversed: false });
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${
            sortOptions.sortType === SortType.ALPHABET ? '' : 'is-light'
          }`}
          onClick={handleSortAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${
            sortOptions.sortType === SortType.LENGTH ? '' : 'is-light'
          }`}
          onClick={handleSortLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${
            sortOptions.isReversed ? '' : 'is-light'
          }`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {isSorted && (
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
        {reorderedGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
