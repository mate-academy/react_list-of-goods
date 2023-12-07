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

  if (sortType === SortType.ALPHABET) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return a.localeCompare(b);
    });
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods = visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
  }

  if (isReversed) {
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

export class App extends React.Component<null, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  }

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  render() {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE
          || this.state.isReversed === true)
        && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => this.setState({
              sortType: SortType.NONE, isReversed: false,
            })}
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
