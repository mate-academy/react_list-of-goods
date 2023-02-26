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

  /* eslint-disable no-console */
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state : State = {
    isReversed: false,
    sortType: SortType.ALPHABET,
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    visibleGoods.sort((f1, f2) => {
      switch (sortType) {
        case SortType.ALPHABET: return f1[sortType].localeCompare(f2[sortType]);
        case SortType.LENGTH: return f1[sortType].length - f2[sortType].length;
        default: return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortByAlphabet}
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
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {goodsFromServer.map((good) => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
