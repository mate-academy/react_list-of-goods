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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: 1,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: 2,
    });
  };

  reverseSort = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetSort = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render(): React.ReactNode {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType === 1
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.sortAlphabetically}
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
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.isReversed === true
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.reverseSort}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={this.resetSort}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {goods.map(good => {
              return (
                <li data-cy="Good" key={good}>{good}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
