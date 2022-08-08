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

  isStarted = () => {
    this.setState({ isStarted: true });
  };

  getReorderedGoods = (
    goods: string[],
    sortType: SortType,
    isReversed: boolean,
  ) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return g1.localeCompare(g2);

        case SortType.LENGTH:
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    return isReversed
      ? visibleGoods.reverse()
      : visibleGoods;
  };

  sortByLength = () => (
    this.setState({
      sortType: SortType.LENGTH,
    })
  );

  sortAlphabetically = () => (
    this.setState({
      sortType: SortType.ALPABET,
    })
  );

  reverse = () => (
    this.setState(state => ({ isReversed: !state.isReversed }))
  );

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const {
      isStarted,
      sortType,
      isReversed,
    } = this.state;

    const goods = this.getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.isStarted}
          >
            Start
          </button>
        )}

        {isStarted && (
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
              {
                goods.map(good => (
                  <li key={good} className="Goods__item">{good}</li>
                ))
              }
            </ul>
          </>
        )}

      </div>
    );
  }
}
