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
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return firstGood.localeCompare(secondGood);
      case SortType.LENGTH:
        return firstGood.length - secondGood.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState(({
      sortType: SortType.NONE,
      isReversed: false,
    }));
  };

  render(): React.ReactNode {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info' : 'button is-info is-light'}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success' : 'button is-success is-light'}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
          && (
            <button
              type="button"
              className={classNames(
                'button is-danger',
                { 'is-light': sortType !== SortType.NONE },
              )}
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
