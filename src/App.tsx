import React from 'react';
import cn from 'classnames';
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
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((prev, next) => prev.localeCompare(next));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((prev, next) => prev.length - next.length);
      break;
    default:
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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSort = (sortType: SortType) => {
    this.setState(prevState => {
      return {
        sortType,
        isReversed: sortType === SortType.NONE ? false : prevState.isReversed,
      };
    });
  };

  handleReverse = () => {
    this.setState(prevState => {
      return {
        isReversed: !prevState.isReversed,
      };
    });
  };

  render() {
    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info', {
              'is-light': this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success', {
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', {
              'is-light': !this.state.isReversed,
            })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(this.state.isReversed || this.state.sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleSort(SortType.NONE)}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {sortedGoods.map(good => <li data-cy="Good" key={good}>{good}</li>)}
        </ul>
      </div>
    );
  }
}
