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

export function getReorderedGoods(goods: string[],
  { sortType, isReversed }: ReorderOptions) {
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
  const [reorderOptions, setReorderOptions] = useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });
  const visibleGoods = getReorderedGoods(goodsFromServer, reorderOptions);

  const handleSortAlphabetically = () => {
    if (reorderOptions.sortType === SortType.ALPHABET) {
      return; // Do nothing if already sorted alphabetically
    }

    setReorderOptions({
      sortType: SortType.ALPHABET,
      isReversed: false,
    });
  };

  const handleSortByLength = () => {
    if (reorderOptions.sortType === SortType.LENGTH) {
      return; // Do nothing if already sorted by length
    }

    setReorderOptions({
      sortType: SortType.LENGTH,
      isReversed: false,
    });
  };

  const handleReverseOrder = () => {
    setReorderOptions({
      sortType: reorderOptions.sortType,
      isReversed: !reorderOptions.isReversed,
    });
  };

  const handleResetOrder = () => {
    setReorderOptions({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  const shouldShowResetButton = reorderOptions.sortType
  !== SortType.NONE || reorderOptions.isReversed;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${reorderOptions.sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          onClick={handleSortAlphabetically}
          disabled={reorderOptions.sortType === SortType.ALPHABET}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${reorderOptions.sortType === SortType.LENGTH ? '' : 'is-light'}`}
          onClick={handleSortByLength}
          disabled={reorderOptions.sortType === SortType.LENGTH}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reorderOptions.isReversed ? '' : 'is-light'}`}
          onClick={handleReverseOrder}
          disabled={reorderOptions.sortType === SortType.NONE}
        >
          Reverse
        </button>

        {shouldShowResetButton && (
          <button
            type="button"
            className="button is-danger"
            onClick={handleResetOrder}
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
