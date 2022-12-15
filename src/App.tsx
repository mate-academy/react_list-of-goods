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
  const visibleGoods: string[] = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a.localeCompare(b);
      case 2:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(visibleGoods);

  return visibleGoods;
}

export const App: React.FC = () => {
  const [state, setState] = useState({
    isReversed: false,
    sortType: 0,
  });

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            `button is-info ${state.sortType === SortType.ALPHABET
              ? '' : 'is-light'
            }`
          }
          onClick={() => setState({
            sortType: SortType.ALPHABET,
            isReversed: state.isReversed,
          })}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            `button is-success ${state.sortType === SortType.LENGTH
              ? '' : 'is-light'
            }`
          }
          onClick={() => setState({
            sortType: SortType.LENGTH,
            isReversed: state.isReversed,
          })}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            `button is-warning ${state.isReversed
              ? '' : 'is-light'
            }`
          }
          onClick={() => setState({
            sortType: state.sortType,
            isReversed: !state.isReversed,
          })}
        >
          Reverse
        </button>
        {(state.sortType !== 0
          || state.isReversed === true)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => setState({
                sortType: SortType.NONE,
                isReversed: false,
              })}
            >
              Reset
            </button>
          )}
      </div>

      <ul>
        {getReorderedGoods(goodsFromServer, state)
          .map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
      </ul>
    </div>
  );
};
