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
  const visibleGoods = [...goods];

  if (isReversed) {
    return visibleGoods.reverse();
  }

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a.localeCompare(b);

      case 2:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  sortByName = () => {
    this.setState({ sortType: 1 });
  };

  sortByLength = () => {
    this.setState({ sortType: 2 });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ sortType: 0, isReversed: false });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
