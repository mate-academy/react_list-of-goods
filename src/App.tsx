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

  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((good1, good2) => good1.length - good2.length);
  }

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

export class App extends React.Component {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isReversed, sortType, isStarted } = this.state;
    const reordered = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    if (!isStarted) {
      return (
        <div className="App">
          <button
            type="button"
            onClick={() => this.setState({ isStarted: true })}
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => this.setState({ sortType: SortType.ALPABET })}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={() => this.setState({ sortType: SortType.LENGTH })}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isReversed: !(isReversed) })}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => this.setState({
            sortType: SortType.NONE,
            isReversed: false,
          })}
        >
          Reset
        </button>
        <ul className="Goods">
          {reordered.map(good => {
            return (
              <li
                className="Goods__item"
                key={good}
              >
                {good}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
