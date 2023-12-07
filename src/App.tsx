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
  const [sortType, setSortType] = useState<SortType>(SortType.NONE);
  const [isReverse, setIsReversed] = useState<boolean>(false);
  const goodsToRender = getReorderedGoods(goodsFromServer, {
    sort: sortType,
    isReversed: isReverse,
  });

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
    setSortType(SortType.NONE);
    setIsReversed(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${!isReverse ? 'is-light' : ''}`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {(isReverse || sortType !== SortType.NONE) && (
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
        {goodsToRender.map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
