/* eslint-disable @typescript-eslint/no-unused-vars */
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
  sortType: SortType,
  isReversed: boolean,
};

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    switch (sortType) {
      case SortType.ALPHABET:
        visibleGoods.sort((a, b) => {
          return a.localeCompare(b);
        });
        break;
      case SortType.LENGTH:
        visibleGoods.sort((a, b) => {
          return a.length - b.length;
        });
        break;
      default:
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  sortAlphabetically = () => {
    this.setState(
      { sortType: SortType.ALPHABET },
    );
  };

  sortLength = () => {
    this.setState(
      { sortType: SortType.LENGTH },
    );
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortType: SortType.NONE,
      },
    );
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const reorderedGoods = this.getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== 1 ? 'is-light' : ''}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== 2 ? 'is-light' : ''}`}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!this.state.isReversed ? 'is-light' : ''}`}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {
            (this.state.sortType !== SortType.NONE || this.state.isReversed)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          <ul>
            {
              reorderedGoods.map((good) => {
                return (
                  <li key={good} data-cy="Good">{good}</li>
                );
              })
            }
          </ul>
        </ul>
      </div>
    );
  }
}
