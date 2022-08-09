/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

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
  ALPABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.NONE:
        return 0;

      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        throw new Error('invalid sorting type');
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startList = () => {
    this.setState({ isStarted: true });
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseSorting = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  resetSorting = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isReversed, isStarted, sortType } = this.state;

    return (
      <div className="App">

        {isStarted
          ? (
            <>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverseSorting}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.resetSorting}
              >
                Reset
              </button>

              <ul className="Goods">
                {getReorderedGoods(goodsFromServer, sortType, isReversed)
                  .map(good => {
                    return (
                      <li className="Goods__item">{good}</li>
                    );
                  })}
              </ul>
            </>
          ) : (
            <button
              type="button"
              onClick={this.startList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
