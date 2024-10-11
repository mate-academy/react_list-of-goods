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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a: string, b: string) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a: string, b: string) => a.length - b.length);
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component {
  state: ReorderOptions = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetSorting = () => {
    this.setState((state: ReorderOptions) => {
      return {
        ...state,
        isReversed: false,
        sortType: SortType.NONE,
      };
    });
  };

  sortByMethod = (sortingType: SortType) => {
    this.setState((state: ReorderOptions) => {
      return {
        ...state,
        sortType: sortingType,
      };
    });
  };

  reverseHanlder = () => {
    this.setState((state: ReorderOptions) => {
      return {
        ...state,
        isReversed: !state.isReversed,
      };
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = getReorderedGoods (goodsFromServer, {
      sortType: sortType,
      isReversed: isReversed,
    });

    const displayResetButton = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info${SortType.ALPHABET !== sortType ? ' is-light' : ''}`}
            onClick={() => this.sortByMethod(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success${SortType.LENGTH !== sortType ? ' is-light' : ''}`}
            onClick={() => this.sortByMethod(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning${isReversed === false ? ' is-light' : ''}`}
            onClick={this.reverseHanlder}
          >
            Reverse
          </button>

          {displayResetButton && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSorting}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          {reorderedGoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
