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

  visibleGoods.sort((a, b): number => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      case SortType.NONE:
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    const { sortType, isReversed } = this.state;

    const sortedAlphabetically = sortType === SortType.ALPHABET
      ? ''
      : 'is-light';

    const sortedByLength = sortType === SortType.LENGTH
      ? ''
      : 'is-light';

    const reversed = isReversed
      ? ''
      : 'is-light';

    const showReset = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortedAlphabetically}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortedByLength}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${reversed}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {showReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
