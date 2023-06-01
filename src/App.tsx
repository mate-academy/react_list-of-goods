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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortType: SortType.NONE,
    }));
  };

  render() {
    const getReorderedGoods = (
      goods: string[],
      { sortType, isReversed }: ReorderOptions,
    ) => {
      const visibleGoods = [...goods];

      if (sortType === 1) {
        visibleGoods.sort();
      }

      if (sortType === 2) {
        visibleGoods.sort((firstItem, secondItem) => {
          return firstItem.length - secondItem.length;
        });
      }

      if (isReversed) {
        visibleGoods.reverse();
      }

      return visibleGoods;
    };

    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${!(sortType === 1) ? 'is-light' : ''}`}
            onClick={this.sortByAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${!(sortType === 2) ? 'is-light' : ''}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!(isReversed) ? 'is-light' : ''}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {!(!isReversed && !sortType) && (
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
          {getReorderedGoods(
            goodsFromServer,
            { sortType, isReversed },
          ).map((item) => (
            <li data-cy="Good" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
