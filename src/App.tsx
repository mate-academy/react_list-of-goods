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

  if (isReversed) {
    visibleGoods.reverse();
  }

  visibleGoods.sort((g1: string, g2: string) => {
    if (sortType === SortType.ALPHABET && isReversed) {
      return g2.localeCompare(g1);
    }

    if (sortType === SortType.LENGTH && isReversed) {
      return g2.length - g1.length;
    }

    switch (sortType) {
      case SortType.LENGTH:
        return g1.length - g2.length;

      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      default:
        return 0;
    }
  });

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortReverse = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  handlertReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortLength}
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.sortReverse}
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== SortType.NONE) && (
              <button
                onClick={this.handlertReset}
                type="button"
                className="button is-danger is-light"
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li
                key={good}
                data-cy="Good"
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
