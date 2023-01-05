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

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => (
        good1.length - good2.length
      ));
      break;

    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => (
        good1.localeCompare(good2)
      ));
      break;

    default:
      break;
  }

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

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleReset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const resetCheck = (sortType === SortType.NONE) && !isReversed;

    return (
      <div className="section App">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {!resetCheck && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul className="App__list">
          {visibleGoods.map(name => (
            <li key={name} data-cy="Good">{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
