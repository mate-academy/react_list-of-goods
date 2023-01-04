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

// enum SortType {
//   NONE = 'none',
//   ALPHABET = 'alphabet',
//   LENGTH = 'length',
// }

type ReorderOptions = {
  sortType: string,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case 'length':
        return g1.length - g2.length;

      case 'alphabet':
        return g1.localeCompare(g2);

      default: return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: string,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 'none',
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortType: 'length' });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: 'alphabet' });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortByAlphabet}
            type="button"
            className="button is-info is-light"
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className="button is-success is-light"
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className="button is-warning is-light"
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => <li data-cy="Good">{good}</li>)}
          </ul>
        </ul>
      </div>
    );
  }
}
