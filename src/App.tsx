import { Component } from 'react';
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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);

      case SortType.LENGTH:
        return g1.length - g2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  defineSortOrder = (sortTypeFromClick: SortType) => {
    this.setState({ sortType: sortTypeFromClick });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={() => this.defineSortOrder(SortType.ALPHABET)}
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => this.defineSortOrder(SortType.LENGTH)}
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.handleReverse}
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              onClick={this.handleReset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
