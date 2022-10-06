/* eslint-disable */

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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((good1, good2) => good1.length - good2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlpabetHandler = () => {
    this.setState({sortType: SortType.ALPHABET});
  };

  sortByLengthHandler = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseHandler = () => {
    this.setState({ isReversed: !this.state.isReversed });
  }

  resetHandler = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
     });
  }

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType: this.state.sortType,
      isReversed: this.state.isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={() => this.sortByAlpabetHandler()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={() => this.sortByLengthHandler()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={() => this.reverseHandler()}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => this.resetHandler()}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
