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

    return (
      <div className="App">
        {!this.state.isStarted
        && (
          <button
            type="button"
            onClick={() => {
              this.setState(state => ({ isStarted: !state.isStarted }));
            }}
          >
            Start
          </button>
        )}
        {this.state.isStarted
        && (
          <div>
            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.ALPABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(state => ({
                  isReversed: !state.isReversed,
                }));
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                });
              }}
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
