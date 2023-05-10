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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return SortType.NONE;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  alphabetSort = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  lengthSort = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverseSort = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  resetSort = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${
              sortType !== SortType.ALPHABET && 'is-light'
            }`}
            onClick={this.alphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${
              sortType !== SortType.LENGTH && 'is-light'
            }`}
            onClick={this.lengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
            onClick={this.reverseSort}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSort}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map((good) => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
