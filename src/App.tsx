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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return SortType.NONE;
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

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  reset = () => {
    this.setState(() => ({
      sortType: SortType.NONE,
      isReversed: false,
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    // eslint-disable-next-line max-len
    const visibleGoods = getReorderedGoods(goodsFromServer, { sortType, isReversed });
    const isHidden = sortType === SortType.NONE && !isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.sortAlphabetically}
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

          <button
            type="button"
            className={`button is-danger ${isHidden ? 'hidden-reset-button' : 'is-light'}`}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul>
          {visibleGoods.map((good: string) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={good} data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
