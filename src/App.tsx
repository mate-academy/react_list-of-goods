import React, { Component } from 'react';
import classNames from 'classnames';
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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;

      default:
        return 0;
    }
  });

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render(): React.ReactNode {
    const { sortType, isReversed } = this.state;
    const updateGoods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'button is-info is-light': sortType !== SortType.ALPHABET })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'button is-success is-light': sortType !== SortType.LENGTH })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'button is-warning is-light': !isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(isReversed !== false || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          <ul>
            {updateGoods.map((good) => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
