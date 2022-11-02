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
  NONE = 0,
  ALPABET = 1,
  LENGTH = 2,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.ALPABET:
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
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByDefault = () => {
    this.setState({ sortType: SortType.NONE });
    this.setState({ isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer, { isReversed, sortType },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames('button',
                'is-info',
                { 'is-light': sortType !== SortType.ALPABET })
            }
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames('button',
                'is-success',
                { 'is-light': sortType !== SortType.LENGTH })
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames('button',
                'is-warning',
                { 'is-light': !isReversed })
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.sortByDefault}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
