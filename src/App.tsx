import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type ReorderOptions = {
  sortType: SortType,
  isReversed?: boolean,
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
  NONE,
  ALPHABET,
  LENGTH,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case SortType.NONE:
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export const App = () => {
  const [state, setState] = useState<ReorderOptions>({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const { sortType, isReversed } = state;

  const handleReset = () => {
    setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  const handleReverse = () => {
    setState(prevState => ({
      ...prevState, isReversed: !prevState.isReversed,
    }));
  };

  const handleSort = (type: SortType) => () => {
    setState(prevState => ({
      ...prevState, sortType: type,
    }));
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={sortType === SortType.ALPHABET
            ? 'button is-info'
            : 'button is-info is-light'}
          onClick={handleSort(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={sortType === SortType.LENGTH
            ? 'button is-success'
            : 'button is-success is-light'}
          onClick={handleSort(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={isReversed
            ? 'button is-warning'
            : 'button is-warning is-light'}
          onClick={handleReverse}
        >
          Reverse
        </button>

        {(isReversed || sortType !== SortType.NONE)
          && (
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
        <ul>
          {getReorderedGoods(goodsFromServer, state).map(good => {
            return (
              <li data-cy="Good" key={good}>{good}</li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};
