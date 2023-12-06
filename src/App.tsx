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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return isReversed === false
    ? visibleGoods
    : visibleGoods.reverse();
}

export const App: React.FC = () => {
  const [reorderOptions, SetReorderOptions] = useState({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const sortByLetter = () => {
    SetReorderOptions({
      sortType: SortType.ALPHABET,
      isReversed: reorderOptions.isReversed,
    });
  };

  const sortByLength = () => {
    SetReorderOptions({
      sortType: SortType.LENGTH,
      isReversed: reorderOptions.isReversed,
    });
  };

  const reverse = () => {
    SetReorderOptions((actual) => ({
      ...actual,
      isReversed: !actual.isReversed,
    }));
  };

  const reset = () => {
    SetReorderOptions({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info
          ${reorderOptions.sortType === SortType.ALPHABET
      ? ''
      : 'is-light'}`}
          onClick={sortByLetter}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success
            ${reorderOptions.sortType === SortType.LENGTH
      ? ''
      : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning
            ${reorderOptions.isReversed ? '' : 'is-light'}`}
          onClick={reverse}
        >
          Reverse
        </button>

        {(reorderOptions.isReversed === true
        || reorderOptions.sortType !== SortType.NONE)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={reset}
            >
              Reset
            </button>
          )}
      </div>

      <ul>
        <ul>
          {getReorderedGoods(goodsFromServer, reorderOptions)
            .map(product => (
              <li data-cy="Good">{product}</li>
            ))}
        </ul>
      </ul>
    </div>
  );
};
