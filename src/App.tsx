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

  // Sort and reverse goods if needed

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReverse = () => {
    this.setState({
      isReversed: !this.state.isReversed,
    });
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              'button is-info' +
              (this.state.sortType !== SortType.ALPHABET ? ' is-light' : '')
            }
            onClick={this.handleSortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              'button is-success' +
              (this.state.sortType !== SortType.LENGTH ? ' is-light' : '')
            }
            onClick={this.handleLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              'button is-warning' + (this.state.isReversed ? '' : ' is-light')
            }
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map((good, index) => {
            return (
              <li data-cy="Good" key={index}>
                {good}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
