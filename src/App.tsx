import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
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
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState({ isReversed: true });
  };

  resetGoods = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
/* eslint-disable */
    return (
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={cn('button is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              })}
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={cn('button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              })}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={cn('button is-warning', {
                'is-light': !isReversed,
              })}
              onClick={this.reverseGoods}
            >
              Reverse
            </button>

            {(sortType !== SortType.NONE || isReversed) && (
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
            {visibleGoods.map((good) => {
              return (
                <li data-cy="Good" key={good}>
                  {good}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
}
