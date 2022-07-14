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
  const visibleGoods = [...goods];

  switch (sortType) {
    case (SortType.ALPABET):
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;
    case (SortType.LENGTH):
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startApp = () => {
    this.setState((state) => ({ isStarted: !state.isStarted }));
  };

  reverseList = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  changeSortType = (value: SortType) => {
    this.setState({ sortType: value });
  };

  resetOrder = () => {
    this.setState({ isReversed: false, sortType: 0 });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods
    = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {isStarted
          ? (
            <>
              <button
                type="button"
                onClick={() => this.changeSortType(SortType.ALPABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.changeSortType(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={() => this.reverseList()}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => this.resetOrder()}
              >
                Reset
              </button>

              <ul className="Goods">
                {visibleGoods.map(
                  good => <li className="Goods__item" key={good}>{good}</li>,
                )}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={() => this.startApp()}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
