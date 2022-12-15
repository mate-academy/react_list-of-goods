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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === 1) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === 2) {
    visibleGoods.sort((a, b) => a.length - b.length);
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

  render() {
    const goods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info${this.state.sortType !== 1 ? ' is-light' : ''}`}
            onClick={() => this.setState({ sortType: 1 })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success${this.state.sortType !== 2 ? ' is-light' : ''}`}
            onClick={() => this.setState({ sortType: 2 })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning${!this.state.isReversed ? ' is-light' : ''}`}
            onClick={() => this.setState(prev => ({
              isReversed: !prev.isReversed,
            }))}
          >
            Reverse
          </button>

          {this.state.sortType !== 0 || this.state.isReversed
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.setState({
                  isReversed: false,
                  sortType: 0,
                })}
              >
                Reset
              </button>
            )
            : <></>}
        </div>

        <ul>
          <ul>
            {goods.map((item => (
              <li key={item} data-cy="Good">{item}</li>
            )))}
          </ul>
        </ul>
      </div>
    );
  }
}
