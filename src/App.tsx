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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a.localeCompare(b);
      case 2:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }
  // Sort and reverse goods if needed
  // ...

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  isReset: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    isReset: false,
  };

  isStarted = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(state => ({
      isReset: !state.isReset,
    }));
  };

  render(): React.ReactNode {
    return (
      <>
        {!this.state.isStarted && (
          <button
            type="button"
            onClick={this.isStarted}
          >
            Start
          </button>
        )}

        {this.state.isStarted && (
          <div className="App">
            <button
              type="button"
              onClick={this.sortByAlphabet}
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
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <ul className="Goods">
              {!this.state.isReset
                ? (getReorderedGoods(
                  goodsFromServer,
                  this.state.sortType,
                  this.state.isReversed,
                )
                  .map(
                    el => <li>{el}</li>,
                  ))
                : goodsFromServer.map(el => <li>{el}</li>)}
            </ul>
          </div>
        )}
      </>
    );
  }
}
