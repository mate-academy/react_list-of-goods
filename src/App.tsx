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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
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

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => (
        good1.length - good2.length
      ));
      break;
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => (
        good1.localeCompare(good2)
      ));
      break;
    default:
      break;
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);

    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              `button is-info ${
                sortType !== SortType.ALPHABET && 'is-light'
              }`
            }
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${
              sortType !== SortType.LENGTH && 'is-light'
            }`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${
              !isReversed && 'is-light'
            }`}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== SortType.NONE)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {
            sortedGoods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
