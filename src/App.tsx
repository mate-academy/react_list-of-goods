import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean;
  sortType: SortType;
};

export const App: React.FC = () => {
  const [state, setState] = useState<State>({
    isReversed: false,
    sortType: SortType.NONE,
  });

  let listOfGoods = [...goodsFromServer];

  const sortAlphabetically = () => {
    setState(prevState => ({
      ...prevState,
      sortType: SortType.ALPHABET,
    }));
  };

  const sortByLength = () => {
    setState(prevState => ({
      ...prevState,
      sortType: SortType.LENGTH,
    }));
  };

  const reset = () => {
    listOfGoods = [...goodsFromServer];
    setState(() => ({
      isReversed: false,
      sortType: SortType.NONE,
    }));
  };

  const reverse = () => {
    setState(prevState => ({
      ...prevState,
      isReversed: !prevState.isReversed,
    }));
  };

  switch (state.sortType) {
    case SortType.ALPHABET:
      listOfGoods.sort();
      break;
    case SortType.LENGTH:
      listOfGoods.sort((a, b) => {
        return a.length - b.length;
      });
  }

  if (state.isReversed) {
    listOfGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={classNames('button is-info', {
            'is-light': state.sortType != SortType.ALPHABET,
          })}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames('button is-success', {
            'is-light': state.sortType != SortType.LENGTH,
          })}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={classNames('button is-warning', {
            'is-light': !state.isReversed,
          })}
          onClick={reverse}
        >
          Reverse
        </button>

        {(state.isReversed != false || state.sortType != SortType.NONE) && (
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
          {listOfGoods &&
            listOfGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
        </ul>
      </ul>
    </div>
  );
};
