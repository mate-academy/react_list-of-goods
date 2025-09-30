import React, { Component } from 'react';
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
  let visibleGoods = [...goods];

  if (sortType === 0) {
    visibleGoods = [...goods];
  } else if (sortType === 1) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === 2) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
  };

  handleSortAlph = () => {
    this.setState({ sortType: 1 });
  };

  handleSortLength = () => {
    this.setState({ sortType: 2 });
  };

  handleSortReset = () => {
    this.setState({ sortType: 0, isReversed: false });
  };

  handleReverse = () => {
    this.setState({ isReversed: !this.state.isReversed });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType: this.state.sortType,
      isReversed: this.state.isReversed,
    });
    const isDifferent = visibleGoods.some((g, i) => g !== goodsFromServer[i]);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType === 1
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.handleSortAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.sortType === 2
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.isReversed
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {isDifferent ? (
            <button
              type="button"
              className={'button is-danger is-light'}
              onClick={this.handleSortReset}
            >
              Reset
            </button>
          ) : null}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
