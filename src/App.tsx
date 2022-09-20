import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.LENGTH:
        return firstGood.length - secondGood.length;
      case SortType.ALPHABET:
        return firstGood.localeCompare(secondGood);
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
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.PureComponent<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  handleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const {
      handleReset,
      handleSortAlphabetically,
      handleReverse,
      handleSortByLength,
    } = this;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info ',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': isReversed === false },
            )}
            onClick={handleReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, { sortType, isReversed }).map(
            (good) => (
              <li key={good} data-cy="Good">{good}</li>
            ),
          )}
        </ul>
      </div>
    );
  }
}
