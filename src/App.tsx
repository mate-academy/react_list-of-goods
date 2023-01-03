import React from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

const goodsFromServer = [
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

function getReorderedGoods(
  { sortType, isReversed }: ReorderOptions,
  goods: string[],
) {
  const orderedGoods = [...goods];

  if (sortType) {
    orderedGoods.sort((goodA, goodB) => {
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
    orderedGoods.reverse();
  }

  return orderedGoods;
}

type State = {
  goods: string[],
  isVisible: boolean,
} & ReorderOptions;

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
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

  reverseOrder = () => {
    this.setState(state => {
      const { isReversed, sortType } = state;

      return {
        isReversed: !isReversed,
        isVisible: !isReversed || !!sortType,
      };
    });
  };

  resetOrder = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      isVisible: false,
    });
  };

  render(): React.ReactNode {
    const {
      goods,
      isReversed,
      sortType,
      isVisible,
    } = this.state;

    const orderedGoods = getReorderedGoods(
      { sortType, isReversed },
      goods,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortAlphabetically}
            className={cn('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={cn('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverseOrder}
            className={cn('button is-warning', {
              'is-light': !isReversed,
            })}
          >
            Reverse
          </button>

          {isVisible && (
            <button
              type="button"
              onClick={this.resetOrder}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {orderedGoods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
