import React from 'react';
import classNames from 'classnames';
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

  visibleGoods.sort((item1, item2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return item1.length - item2.length;

      case SortType.ALPHABET:
        return item1.localeCompare(item2);

      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

interface State {
  sortType: SortType,
  isReversed: boolean,
}

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reversing = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  resetting = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const reorderOptions = { sortType, isReversed };

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortAlphabetically}
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortLength}
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reversing}
            className={classNames(
              'button is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed === true) && (
            <button
              type="button"
              onClick={this.resetting}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, reorderOptions).map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
