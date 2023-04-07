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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [reorderOptions, setReorderOptions] = useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const handleSortAlphabetically = () => {
    setReorderOptions({
      sortType: SortType.ALPHABET,
      isReversed: false,
    });
  };

  const handleSortByLength = () => {
    setReorderOptions({
      sortType: SortType.LENGTH,
      isReversed: false,
    });
  };

  const handleReverse = () => {
    setReorderOptions({
      ...reorderOptions,
      isReversed: !reorderOptions.isReversed,
    });
  };

  const handleReset = () => {
    setReorderOptions({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  const visibleGoods = getReorderedGoods(goodsFromServer, reorderOptions);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${reorderOptions.sortType === SortType.ALPHABET ? 'is-active' : ''}`}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${reorderOptions.sortType === SortType.LENGTH ? 'is-active' : ''}`}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reorderOptions.isReversed ? 'is-active' : ''}`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {reorderOptions.sortType !== SortType.NONE && (
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
        {visibleGoods.map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
