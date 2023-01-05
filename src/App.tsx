import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  visibleGoods.sort((prevGood, nextGood) => {
    if (sortType === SortType.ALPHABET) {
      return prevGood.localeCompare(nextGood);
    }

    if (sortType === SortType.LENGTH) {
      return prevGood.length - nextGood.length;
    }

    return 0;
  });

  if (isReversed) {
    return visibleGoods.reverse();
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

  handleClickSortAlphabeticallyButton = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleClickSortByLengthButton = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleClicReverseButton = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleClickResetButton = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const renderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isSorted = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleClickSortAlphabeticallyButton}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleClickSortByLengthButton}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleClicReverseButton}
          >
            Reverse
          </button>

          { isSorted && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleClickResetButton}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {renderedGoods.map((good) => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
