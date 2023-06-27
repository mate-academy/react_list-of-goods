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
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  goods: string[]
  isReversed: boolean,
  sortType: SortType,
};

export default class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
      isReversed: false,
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
      isReversed: false,
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { goods, isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(goods, { sortType, isReversed });
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
          {visibleGoods.map((good: string, value: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={value} data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
