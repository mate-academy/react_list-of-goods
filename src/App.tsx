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
  const sortedGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      sortedGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      sortedGoods.sort((a, b) => a.length - b.length);
      break;
    default:
  }

  if (isReversed) {
    sortedGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return sortedGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortClick = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleReverseClick = () => {
    this.setState(prevState => ({ isReversed: !prevState.isReversed }));
  };

  handleResetClick = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType: this.state.sortType, isReversed: this.state.isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${this.state.sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={() => this.handleSortClick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${this.state.sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={() => this.handleSortClick(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button ${this.state.isReversed ? 'is-warning' : 'is-light'}`}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {(this.state.sortType || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleResetClick}
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          {visibleGoods.map(good => {
            return (
              <li data-cy="Good" key={good}>{good}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
