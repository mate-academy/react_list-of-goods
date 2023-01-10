import React from 'react';
import cn from 'classnames';
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

  if (sortType) {
    visibleGoods.sort((goodA, goodB) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return goodA.localeCompare(goodB);

        case SortType.LENGTH:
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isVisible: boolean,
  sortType: SortType,
} & ReorderOptions;

export class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isVisible: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
      isVisible: !state.isReversed || !!state.sortType,
    }));
  };

  resetGood = () => {
    this.setState({
      sortType: SortType.NONE,
      isVisible: false,
      isReversed: false,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
      isVisible,
    } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning',
              { 'is-light': !isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          { isVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGood}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(
              good => <li key={good} data-cy="Good">{good}</li>,
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
