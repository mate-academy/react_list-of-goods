/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { Good } from './components/Good/Good';

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

  visibleGoods.sort((prev, next) => {
    switch (sortType) {
      case SortType.NONE:
        return 0;
      case SortType.ALPABET:
        return prev.localeCompare(next);
      case SortType.LENGTH:
        return prev.length - next.length;
      default:
        return 0;
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
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  sortAlph = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ isStarted: true });
              }}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={this.sortAlph}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortLength}
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
                {goods.map(good => (
                  <Good name={good} key={good} />
                ))}
              </ul>
            </>
          )}

      </div>
    );
  }
}
