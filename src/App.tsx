import React from 'react';
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
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
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

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export const App: React.FC = () => {
  const [isReversed, setIsReserved] = React.useState(false);
  const [sortType, setSortType] = React.useState(SortType.NONE);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
          onClick={() => setSortType(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
          onClick={() => setSortType(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
          onClick={() => setIsReserved(p => !p)}
        >
          Reverse
        </button>

        {(isReversed || sortType !== SortType.NONE) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortType(SortType.NONE);
              setIsReserved(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        <ul>
          {getReorderedGoods(goodsFromServer, { sortType, isReversed }).map(
            (good, i) => (
              <li key={i} data-cy="Good">
                {good}
              </li>
            ),
          )}
        </ul>
      </ul>
    </div>
  );
};
