import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

// Define ReorderOptions type
type ReorderOptions = {
  sort: SortType | null;
  isReversed: boolean;
};

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
  ALPHABET,
  LENGTH,
  NONE,
}

const getReorderedGoods = (
  goods: string[],
  { sort, isReversed }: ReorderOptions,
) => {
  let goodsCopy = [...goods];

  switch (sort) {
    case SortType.ALPHABET:
      goodsCopy = goodsCopy.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      goodsCopy = goodsCopy.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    goodsCopy.reverse();
  }

  return goodsCopy;
};

export const App: React.FC = () => {
  const [sortType, setSortType] = useState<SortType | null>(null);
  const [isReverse, setIsReversed] = useState<boolean>(false);

  const handleSortAlphabetically = () => {
    setSortType(SortType.ALPHABET);
  };

  const handleSortByLength = () => {
    setSortType(SortType.LENGTH);
  };

  const handleReverse = () => {
    setIsReversed(!isReverse);
  };

  const handleReset = () => {
    setSortType(null);
    setIsReversed(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={sortType === SortType.ALPHABET
            ? 'button is-info'
            : 'button is-info is-light'}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={sortType === SortType.LENGTH
            ? 'button is-success'
            : 'button is-success is-light'}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={isReverse
            ? 'button is-warning'
            : 'button is-warning is-light'}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {(isReverse || sortType !== null) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {getReorderedGoods(goodsFromServer, {
          sort: sortType !== SortType.NONE ? sortType : null,
          isReversed: isReverse || false,
        }).map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
