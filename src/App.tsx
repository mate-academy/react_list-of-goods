/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((goods1, goods2) => {
    switch (sortType) {
      case 1:
        return goods1.localeCompare(goods2);
      case 2:
        return goods1.length - goods2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }
  // eslint-disable-next-line no-console

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (sortType: number) => {
    this.setState({ sortType });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goodsDone = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== 1 },
            )}
            onClick={() => this.sortBy(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== 2 },
            )}
            onClick={() => this.sortBy(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': isReversed === false },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== 0 || isReversed) && (
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
          <ul>
            {goodsDone.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
