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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  switch (sortType) {
    case (SortType.ALPABET): {
      visibleGoods.sort((first, second) => first.localeCompare(second));
      break;
    }

    case (SortType.LENGTH): {
      visibleGoods.sort((first, second) => first.length - second.length);
      break;
    }

    default:
      break;
  }

  if (isReversed) {
    return visibleGoods.reverse();
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

  reverseSorting = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetSorting = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const resetButtonRules = sortType !== SortType.NONE || isReversed;
    const alphabetButtonRules = sortType !== SortType.ALPABET;
    const lengthButtonRules = sortType !== SortType.LENGTH;

    const preparedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'button is-info is-light': alphabetButtonRules },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'button is-success is-light': lengthButtonRules },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'button is-warning is-light': !isReversed },
            )}
            onClick={this.reverseSorting}
          >
            Reverse
          </button>

          {resetButtonRules && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSorting}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {preparedGoods.map(good => (
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
