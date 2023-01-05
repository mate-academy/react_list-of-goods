import { useState } from 'react';
import cn from 'classnames';
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
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;

    default:
      break;
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
  const [isReversed, setIsReversed] = useState(false);
  const [sortType, setSortType] = useState(SortType.NONE);

  const reverseGoods = () => {
    setIsReversed(!isReversed);
  };

  const sortAlphabetically = () => {
    setSortType(SortType.ALPHABET);
  };

  const sortByLength = () => {
    setSortType(SortType.LENGTH);
  };

  const reset = () => {
    setSortType(SortType.NONE);
    setIsReversed(false);
  };

  const visibleGoods = getReorderedGoods(goodsFromServer, {
    sortType,
    isReversed,
  });

  const isSorted = sortType !== SortType.NONE;
  const isModified = isSorted || isReversed;

  const resetButton = isModified && (
    <button
      type="button"
      className="button is-danger is-light"
      onClick={reset}
    >
      Reset
    </button>
  );

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            cn('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })
          }
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            cn('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })
          }
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            cn('button is-warning', {
              'is-light': !isReversed,
            })
          }
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {resetButton}
      </div>

      <ul>
        <ul>
          {visibleGoods.map((good) => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
