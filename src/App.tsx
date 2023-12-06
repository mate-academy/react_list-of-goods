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
  let visibleGoods = [...goods];

  if (sortType === 1 && isReversed === false) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  } else if (sortType === 2 && isReversed === false) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
  } else if (sortType === 1 && isReversed === true) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return b.localeCompare(a);
    });
  } else if (sortType === 2 && isReversed === true) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return a.length - b.length;
    }).reverse();
  } else if (sortType === 0 && isReversed === true) {
    visibleGoods = visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component {
  state: State = {
    isReversed: false,
    sortType: 0,
  }

  render() {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === 1
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={() => this.setState({ sortType: 1 })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === 2
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={() => this.setState({ sortType: 2 })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={() => (this.state.isReversed
              ? this.setState({ isReversed: false })
              : this.setState({ isReversed: true }))}
          >
            Reverse
          </button>

          {(this.state.sortType !== 0 || this.state.isReversed === true)
        && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => this.setState({ sortType: 0, isReversed: false })}
          >
            Reset
          </button>
        )}
        </div>

        <ul>
          {goods.map(good => {
            return (
              <li key={good} data-cy="Good">{good}</li>
            );
          })}
        </ul>

      </div>
    );
  }
}
