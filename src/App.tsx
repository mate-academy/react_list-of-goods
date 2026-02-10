import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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
  if (sortType === 1) {
    visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  } else if (sortType === 2) {
    visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
  }

  if (isReversed === true) {
    return visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);
  const [currentSort, setCurrentSort] = useState(SortType.NONE);

  const reorderedGoods = getReorderedGoods(goodsFromServer, {
    sortType: currentSort,
    isReversed: reverse,
  });

  const sortByAlphabet = () => {
    setCurrentSort(SortType.ALPHABET);
  };

  const sortByLength = () => {
    setCurrentSort(SortType.LENGTH);
  };

  const sortReversed = () => {
    setReverse(!reverse);
  };

  const sortReset = () => {
    setCurrentSort(SortType.NONE);
    setReverse(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${currentSort !== SortType.ALPHABET && 'is-light'}`}
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${currentSort !== SortType.LENGTH && 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reverse === false && 'is-light'}`}
          onClick={sortReversed}
        >
          Reverse
        </button>

        {(reverse === true || currentSort !== SortType.NONE) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={sortReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {reorderedGoods.map(item => {
            return (
              <li data-cy="Good" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};
