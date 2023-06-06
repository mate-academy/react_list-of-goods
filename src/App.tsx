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

  sortBy = (sortTypeKey: SortType) => {
    this.setState(() => ({
      sortType: sortTypeKey,
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

      visibleGoods.sort((firstItem, secondItem) => {
        switch (sortType) {
          case SortType.ALPHABET:
            return firstItem.localeCompare(secondItem);

          case SortType.LENGTH:
            return firstItem.length - secondItem.length;

          default:
            return 0;
        }
      });

      if (isReversed) {
        visibleGoods.reverse();
      }

      return visibleGoods;
    };

    const { isReversed, sortType } = this.state;
    const isHideReset = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${!(sortType === SortType.ALPHABET) ? 'is-light' : ''}`}
            onClick={() => this.sortBy(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${!(sortType === SortType.LENGTH) ? 'is-light' : ''}`}
            onClick={() => this.sortBy(SortType.LENGTH)}
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

          {isHideReset && (
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
