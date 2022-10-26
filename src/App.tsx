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
  ALPABET,
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

  visibleGoods.sort((goodFirst: string, goodSecond: string): number => {
    switch (sortType) {
      case SortType.ALPABET:
        return goodFirst.localeCompare(goodSecond);

      case SortType.LENGTH:
        return goodFirst.length - goodSecond.length;

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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reversGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLen = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlph = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  resetGoods = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const resultGoods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button is-info',
                {
                  'is-light': sortType !== SortType.ALPABET,
                },
              )
            }
            onClick={this.sortByAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-success',
                {
                  'is-light': sortType !== SortType.LENGTH,
                },
              )
            }
            onClick={this.sortByLen}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-warning',
                {
                  'is-light': !isReversed,
                },
              )
            }
            onClick={this.reversGoods}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed)
              ? (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.resetGoods}
                >
                  Reset
                </button>
              )
              : null
          }
        </div>

        <ul>
          {resultGoods.map(good => (
            <li key={good} data-cy="Good">
              { good }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
