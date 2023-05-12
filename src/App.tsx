import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { sortedLastIndexBy } from 'cypress/types/lodash';

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
  visibleGoods.sort((g1: string, g2: string) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  alphSorted = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  lengthSorted = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reversed = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.alphSorted}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.lengthSorted}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
            onClick={this.reversed}
          >
            Reverse
          </button>
          {
            (isReversed || sortType !== SortType.NONE)
              ? (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.reset}
                >
                  Reset
                </button>
              ) : ''
          }
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { sortType, isReversed })
              .map(good => (
                <li data-cy="Good" key={good}>{good}</li>
              ))}
          </ul>
        </ul>
      </div>
    );
  }
}
export default App;
