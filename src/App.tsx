/* eslint-disable no-console */
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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType !== 'none') {
    visibleGoods.sort((firstGood, secondGood) => {
      switch (sortType) {
        case 'alphabet':
          return firstGood.localeCompare(secondGood);
        case 'length':
          return firstGood.length - secondGood.length;
        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetGoods = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === 'alphabet'
              ? 'button is-info' : 'button is-info is-light'}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === 'length'
              ? 'button is-success' : 'button is-success is-light'}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {(sortType !== 'none' || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGoods}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
