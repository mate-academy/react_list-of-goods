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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return SortType.NONE;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphaber = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLenght = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState((state) => ({
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
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const shouldShowResetButton = sortType !== SortType.NONE
    || isReversed === true;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortAlphaber}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortLenght}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': isReversed === false,
            })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {shouldShowResetButton && (
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
          {visibleGoods.map((good: string) => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
