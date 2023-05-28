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

  visibleGoods.sort((wordOne, wordTwo) => {
    switch (sortType) {
      case 0:
        return 0;
      case 1:
        return wordOne.localeCompare(wordTwo);
      case 2:
        return wordOne.length - wordTwo.length;
      default:
        return 0;
    }
  });
  // Sort and reverse goods if needed

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component <{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
  };

  sortByAlphabet = () => {
    this.setState({ isReversed: false, sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ isReversed: false, sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(statePrev => ({
      isReversed: !statePrev.isReversed, sortType: statePrev.sortType,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const sort = this.state.sortType;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sort === 1
              ? 'button is-info' : 'button is-info is-light'}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sort === 2
              ? 'button is-success' : 'button is-success is-light'}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {this.state.sortType !== 0 || this.state.isReversed === true ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          ) : null}

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(
              (good: string) => <li data-cy="Good" key={good}>{good}</li>,
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
