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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((goodA: string, goodB: string): number => {
    switch (sortType) {
      case SortType.ALPABET:
        return goodA.localeCompare(goodB);
      case SortType.LENGTH:
        return goodA.length - goodB.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  resetChange = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const sortedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': !isReversed })}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetChange}
              >
                Reset
              </button>
            )
            : null}

        </div>

        <ul>
          {sortedGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
