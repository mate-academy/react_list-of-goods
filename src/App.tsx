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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((good1, good2) => good1.length - good2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
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

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info ',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': isReversed === false },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
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
