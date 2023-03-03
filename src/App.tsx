import 'bulma/css/bulma.css';
import React from 'react';
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
  if (sortType === SortType.NONE && isReversed) {
    return visibleGoods.reverse();
  }

  if (sortType === SortType.ALPHABET) {
    return !isReversed
      ? visibleGoods.sort()
      : visibleGoods.sort((a, b) => (a > b ? -1 : 1));
  }

  if (sortType === SortType.LENGTH) {
    return !isReversed
      ? visibleGoods.sort((a, b) => a.length - b.length)
      : visibleGoods.sort((a, b) => a.length - b.length).reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      ...state,
      isReversed: !this.state.isReversed,
    }));
  };

  alphSort = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.ALPHABET,
    }));
  };

  byLength = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.LENGTH,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const isInitialState = !this.state.isReversed
      && this.state.sortType === SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.alphSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.byLength}
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
            onClick={this.reverse}
          >
            Reverse
          </button>

          {!isInitialState && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          ) }
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
