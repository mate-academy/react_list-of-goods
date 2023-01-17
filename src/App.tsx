import { Component } from 'react';

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

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetGoods = () => (
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    })
  );

  reverseGoods = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  sortByAlphabetically = () => (
    this.setState({ sortType: SortType.ALPHABET })
  );

  sortByLength = () => (
    this.setState({ sortType: SortType.LENGTH })
  );

  render() {
    const { sortType, isReversed } = this.state;
    const updatedGoods = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.sortByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
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
          {updatedGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
