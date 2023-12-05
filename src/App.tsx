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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods = [...visibleGoods].reverse();
  }

  if (sortType === SortType.NONE) {
    visibleGoods = [...visibleGoods];
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseOrder = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  resetSorting = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);

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
            onClick={this.sortByAlphabetically}
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
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              isReversed === true
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.reverseOrder}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSorting}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods.map(item => {
            return (
              <li key={item} data-cy="Good">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
