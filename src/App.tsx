/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
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

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((goodA, goodB) => goodA.localeCompare(goodB));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
      break;

    default:
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startGoods = () => {
    this.setState({ isStarted: true });
  };

  sortByType = (type: SortType) => {
    this.setState({ sortType: type });
  };

  reverseGoods = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  resetGoodsOrder = () => {
    this.setState({ isReversed: false, sortType: 0 });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const allGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {isStarted
          ? (
            <>
              <button
                type="button"
                onClick={() => this.sortByType(SortType.ALPABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.sortByType(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={() => this.reverseGoods()}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => this.resetGoodsOrder()}
              >
                Reset
              </button>

              <ul className="Goods">
                {allGoods.map(good => (
                  <li className="Goods__item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={() => this.startGoods()}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
