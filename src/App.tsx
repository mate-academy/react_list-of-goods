import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortType, setSortType] = useState(SortType.NONE);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isReversed, setIsReversed] = useState(false);

  const reorderedGoods = getReorderedGoods(goodsFromServer, {
    sortType,
    isReversed,
  });

  //Just playing around with classnames
  const basicClassesForButton = cn('button');

  const buttonSortAlphabet = cn(basicClassesForButton, 'is-info', {
    'is-light': sortType !== SortType.ALPHABET,
  });

  const buttonSortLength = cn(basicClassesForButton, 'is-success', {
    'is-light': sortType !== SortType.LENGTH,
  });

  const buttonReverse = cn(basicClassesForButton, 'is-warning', {
    'is-light': !isReversed,
  });

  const buttonReset = cn(basicClassesForButton, 'is-danger', {
    'is-light': sortType === SortType.NONE && !isReversed,
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={buttonSortAlphabet}
          onClick={() => {
            setSortType(SortType.ALPHABET);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={buttonSortLength}
          onClick={() => {
            setSortType(SortType.LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={buttonReverse}
          onClick={() => {
            setIsReversed(!isReversed);
          }}
        >
          Reverse
        </button>

        {(sortType !== 0 || isReversed) && (
          <button
            type="button"
            className={buttonReset}
            onClick={() => {
              setSortType(SortType.NONE);
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {reorderedGoods.map((good, index) => (
            <li key={index} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
