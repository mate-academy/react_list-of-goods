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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((f1, f2) => {
    switch (sortType) {
      case SortType.ALPABET:
        return f1.localeCompare(f2);

      case SortType.LENGTH:
        return f1.length - f2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
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

  render() {
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    const handleSortByName = () => {
      this.setState({ sortType: SortType.ALPABET });
    };

    const handleSortByLength = () => {
      this.setState({ sortType: SortType.LENGTH });
    };

    const handleStart = () => {
      this.setState(state => ({ isStarted: !state.isStarted }));
    };

    const handleReverse = () => {
      this.setState(state => ({ isReversed: !state.isReversed }));
    };

    const handleReset = () => {
      this.setState({
        isReversed: false,
        sortType: SortType.NONE,
      });
    };

    return (
      <div className="App">
        {!this.state.isStarted
        && (
          <button
            type="button"
            onClick={handleStart}
          >
            Start
          </button>
        )}
        {this.state.isStarted
        && (
          <div>
            <button
              type="button"
              onClick={handleSortByName}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={handleSortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={handleReverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li className="Goods__item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
